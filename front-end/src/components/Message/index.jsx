import {styles } from './styles.js';
import React,{ useEffect, useState } from "react";
import { format } from "date-fns";
import { Text, View, FlatList, TouchableHighlight, Image } from 'react-native';
import { memo } from 'react/cjs/react.production.min.js';

function Message({ message, own }) {
  return (
    <View style = {styles.card}>
      <View style ={own ? styles.messageOwn:styles.message}>
        <View style ={styles.messageTop}>
          <Text style ={own ? styles.messageTextOwn: styles.messageText}>{message?.text}</Text>
          <Text style = {[{color:'#c4c3c0'}]} >{format(new Date(message?.createdAt),"HH:MM")}</Text>
        </View>
      </View>
    </View>
  );
}

export default memo(Message)