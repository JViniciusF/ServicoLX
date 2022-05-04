import {styles} from './styles.js';
import Conversation from "../../components/Conversation";
import Message from "../../components/message";
import React,{ useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { TextInput,View } from "react-native";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
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

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

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
      const res = await axios.post("/messages", message);
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
      <View style ={styles.messenger}>
        <View style ={styles.chatMenu}>
          <View style ={styles.chatMenuWrapper}>
            {conversations.map((c) => (
              <View onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </View>
            ))}
          </View>
        </View>
        <View style ={styles.chatBox}>
          <View style ={styles.chatBoxWrapper}>
            {currentChat ? (
              <View>
                <View style ={styles.chatBoxTop}>
                  {messages.map((m) => (
                    <View ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id} />
                    </View>
                  ))}
                </View>
                <View style ={styles.chatBoxBottom}>
                  <TextInput
                    style ={styles.chatMessageInput}
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></TextInput>
                  <button style ={styles.chatSubmitButton} onClick={handleSubmit}>
                    Send
                  </button>
                </View>
              </View>
            ) : (
              <Text style ={styles.noConversationText}>
                Open a conversation to start a chat.
              </Text>
            )}
          </View>
        </View>
        {/* <View style ={styles.chatOnline}>
          <View style ={styles.chatOnlineWrapper}>
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            />
          </View>
        </View> */}
      </View>
  );
}