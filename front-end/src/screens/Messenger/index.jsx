import { styles } from '../../utils/styles.js'
import Message from "../../components/Message";
import React,{ useContext, useEffect, useRef, useState,} from "react";
import axios from "axios";
import io from "socket.io-client";
import { TextInput,View ,Text,TouchableHighlight,Image,KeyboardAvoidingView} from "react-native";
import { removeData, retrieveData } from '../../service/storage';
import { GetAllMessagesByConversationService,AddMessageService } from '../../service/messageService';
import { GetAllConversationByAllUsersService } from '../../service/conversationService'
import { FlatList } from 'react-native-gesture-handler';
import {GiftedChat} from 'react-native-gifted-chat'
import getEnvVars from '../../../environment';
const { ws } = getEnvVars();


export default function Messenger({ navigation, route }) {
  const [ user, setUser ] = useState(null);
  const [secundUser,setSecundUser] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  
  const socket = useRef(io(`${ws}`));
  const scrollRef = useRef();
  
  useEffect(()=>{
    async function _init(){
      setUser(JSON.parse( await retrieveData('@user')));
    };
    _init();
  },[navigation]);

  useEffect(() => {
    async function getConversations (){
      try {
        if (user && route.params.value){
          let conversa = await GetAllConversationByAllUsersService({userId:user?._id,secondId:route.params.value._id});
          if (conversa){
            setCurrentChat(conversa)
          }else{
            setCurrentChat({userId:user?._id,secondId:route.params.value._id})
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
    
  },[user]);

  useEffect(() => {
    async function getMessages(){
      try {
        const res = await GetAllMessagesByConversationService({id:currentChat?._id});
        setMessages(res);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();

  }, [currentChat]);


  useEffect(() => {
    if (user && currentChat){
      socket.current.emit("addUser", currentChat?._id);
    }
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage ){
      const messageObj = {
        user: user,
        text: newMessage,
        conversationId: currentChat?._id,
        secondId: route.params.value._id

      };

      try {
        const res = await AddMessageService(messageObj);
        if (res){
          setMessages([...messages, res]);
          
          socket.current.emit("sendMessage", {
            message: res,
            conversationId:currentChat?._id
          });
        }
        setNewMessage("");
        
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollToBottom({ animated: true });
  }, [messages]);

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      if (data.message){
        setMessages([...messages, data.message]);

      }
    });
  },);

  return (
    <View style = {[styles.body,{backgroundColor:"white"}]}>
        <View style={styles.chatHeader}> 
              <Image
                  style={styles.tinyPhoto}
                  source={{
                  uri: route.params.value ? route.params.value.avatarUrl : 'https://reactnative.dev/img/tiny_logo.png',
                  }}
              />
            <Text style = {styles.chatTitle}>{route.params.value.name} {route.params.value.lastName}</Text>
        </View>
        <KeyboardAvoidingView  behavior="height" style ={styles.flexContainer}>
          <View style ={styles.chatBox}>
              <GiftedChat
                messages={messages}
                renderInputToolbar={() => null}
                renderComposer={() => null}
                renderAvata={()=>null}
                minInputToolbarHeight={0}
                inverted={false}
                ref={scrollRef}
                user={{
                    _id: user?._id,
                }}
              />
          </View>

          <View style={styles.chatBoxBottom}>
            <TextInput
              style ={styles.chatMenuInput}
              placeholder="Digite sua mensagem..."
              onChangeText={setNewMessage}
              value={newMessage}
            ></TextInput>
            <TouchableHighlight onPress={handleSubmit} underlayColor="#DDDDDD">
              <View style={styles.chatSubmitButton} >
                <Text style={styles.logoutButtonText}>{`Enviar`}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
    </View>
  );
}