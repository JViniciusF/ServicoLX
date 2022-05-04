import {styles} from './styles.js';
import Conversation from "../../components/Conversation";
import React,{ useContext, useEffect, useRef, useState } from "react";
import { removeData, retrieveData } from '../../service/storage';
import {getAllConversationsByUserService , AddConversationService ,GetAllConversationByAllUsersService} from "../../service/conversationService";
import axios from "axios";
import { TextInput,View,Text } from "react-native";
import { FlatList } from 'react-native-gesture-handler';

export default function Conversations({ navigation }) {

    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [ user, setUser ] = useState(false);
    const [ loading, setLoading ] = useState(false)
    const socket = useRef();
    const scrollRef = useRef();
    useEffect(()=>{
        const _init = async()=>{
            setUser(JSON.parse(await retrieveData('@user')))
        };

        _init()
    },[[ navigation ]])

    useEffect(() => {
        const getConversations = async () => {
        try {
            setLoading(true)
            let conversations = await getAllConversationsByUserService({userId:user._id})
            setConversations(conversations);
            setLoading(false)
                
        } catch (err) {
            console.log(err);
        }

        
    };
        getConversations();
    },[user._id]);

    return (
        <View style ={styles.messenger}>
            <View style ={styles.chatMenu}>
                {/* <View style ={styles.chatMenuWrapper}>
                {conversations.map((c) => (
                    <View style = {styles.chatBox}>
                        <Conversation key = {c._id} conversation={c} currentUser={user} />
                    </View>
                ))} */}
                {/* </View> */}
                
                <FlatList 
                    data={conversations}
                    keyExtractor={item => item._id}
                    style={styles.flatListRow}
                    renderItem={({item}) => 
                        (
                            <Conversation key = {item._id} conversation={item} currentUser={user} />
                        )
                    }
                />
                    
                
            </View>
            
        </View>
    );
}