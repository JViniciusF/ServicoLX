import { styles } from '../../utils/styles.js'
import Message from "../../components/Message";
import React,{ useContext, useEffect, useRef, useState,Fla } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { TextInput,View ,Text,TouchableHighlight} from "react-native";
import { removeData, retrieveData } from '../../service/storage';
import { GetAllMessagesByConversationService } from '../../service/messageService';
import { GetConversationByIdService } from '../../service/conversationService'
import { FlatList } from 'react-native-gesture-handler';

export default function Messenger({ navigation, route }) {
  const [ user, setUser ] = useState(false);
  const [idCurrentChat, setIdCurrentChat] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("ws://192.168.0.15:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(()=>{
    const _init =async()=>{
      setUser(JSON.parse( await retrieveData('@user')));
    };
    setIdCurrentChat(route.params.value);
    _init()
  },[[navigation], route]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        let conversations = await GetConversationByIdService({id:idCurrentChat})
        setCurrentChat(conversations);
              
      } catch (err) {
          console.log(err);
      }
    };
      getConversations();
  },[idCurrentChat]);


  

  useEffect(() => {
    const getMessages = async () => {
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
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res =AddMessageService(message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <View style = {styles.body}>
      <View style ={styles.chatBoxWrapper2}>
        {currentChat ? (
            <View style ={styles.chatBoxTop}>
              <FlatList 
                data={messages}
                keyExtractor={item => item._id}
                style={styles.flatListColumn}
                renderItem={({item}) => 
                    (
                      <Message message={m} own={m.sender === user._id} />
                    )
                }
            />
            </View>
        ) : (
          <Text style ={styles.noConversationText}>
            Open a conversation to start a chat.
          </Text>
        )}
      </View>

      <View style={styles.chatBox}>
        <TextInput
          style ={styles.chatMenuInput}
          placeholder="Digite sua mensagem..."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        ></TextInput>
        <TouchableHighlight onPress={handleSubmit} underlayColor="#DDDDDD">
          <View style={styles.chatSubmitButton} >
            <Text style={styles.logoutButtonText}>{`Enviar`}</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}