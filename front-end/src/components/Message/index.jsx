import {styles } from './styles.js';
import React,{ useEffect, useState } from "react";
import { Text, View, FlatList, TouchableHighlight, Image } from 'react-native';

export default function Message({ message, own }) {
  return (
    <View style ={own ? styles.messageOwn: styles.message}>
      <View style ={styles.messageTop}>
        {/* <img
          style ={styles.messageImg}
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        /> */}
        <Text style ={styles.messageText}>{message.text}</Text>
      </View>
      <View style ={styles.messageBottom}>{format(message.createdAt)}</View>
    </View>
  );
}