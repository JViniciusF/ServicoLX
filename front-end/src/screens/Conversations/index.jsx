import { styles } from '../../utils/styles.js'
import Conversation from "../../components/Conversation";
import React,{ useContext, useEffect, useRef, useState } from "react";
import { removeData, retrieveData } from '../../service/storage';
import {getAllConversationsByUserService , AddConversationService ,GetAllConversationByAllUsersService} from "../../service/conversationService";
import axios from "axios";
import { TextInput,View,Text, ActivityIndicator  } from "react-native";
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
        const _init =async()=>{
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
        console.log({conversations});
    },[user._id]);

    const OpenMessenger = (value) => {
        navigation.navigate("Messenger", { value })
    }
    
    return (
        <View style ={styles.body}>
            { loading &&
                <View style={styles.loading}>
                    <ActivityIndicator size='large' color='red' />
                </View>
            }
            <FlatList 
                data={conversations}
                keyExtractor={item => item._id}
                style={styles.flatListColumn}
                renderItem={({item}) => 
                    (
                        <Conversation key = {item._id} conversation={item} currentUser={user} onPressCard={OpenMessenger} />
                    )
                }
            />

        </View>
    );
}