import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  message: {
    display: 'flex',
    marginTop: 20,
    alignItems: 'flex-start',
  },

  messageOwn:{
    alignItems: 'flex-end',
    marginTop: 20,
    display: 'flex',
  },
  
  messageTop:{
      display: 'flex',
  },
  
  messageImg: {
    width: 32,
    height: 32,
    borderRadius: 50,
    marginRight: 10,
  },
  
  messageText:{
      padding: 10,
      borderRadius: 20,
      backgroundColor: '#e6e6e6',
      color: 'black',
      maxWidth: 300,
  },
  
  messageTextOwn:{
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#1877f2',
    alignSelf: 'flex-end',
    color: 'white',
    maxWidth: 300,
  },  

  messageBottom:{
      fontSize: 12,
      marginTop: 10,
  },
  
  card:{
    width:"100%"
  }
})