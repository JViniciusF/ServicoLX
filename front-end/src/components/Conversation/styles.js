import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  conversation:{
    backgroundColor:'white',
    height:75,
    width:'100%',
    marginTop:10,
    marginBottom:10,
    justifyContent:'center',
  },

  conversationImg:{
    width: 65,
    height: 65,
    maxWidth:65,
    borderRadius: 50,
    alignSelf:'flex-start',
    justifyContent:'center'
  },

  conversationName: {
    marginLeft:15,
    fontSize: 20,
  },
  
  card:{
    margin:15,
    flexDirection:"row"
    
  }

})