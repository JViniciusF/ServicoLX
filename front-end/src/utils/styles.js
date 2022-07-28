import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:30,
        height:'100%'
    },

    loading: {
        position: 'relative',
        top: "80%",
        zIndex: 100,
        borderRadius: 50
        
    },

    configHeaderContainer:{
        height: 50,
        width: '100%',
        backgroundColor:"white",
        paddingBottom:10
    },

    headerContainer: {
        height: '8%',
        width: '100%',
    },

    bottomContainer: {
        height: 80,
        width: '100%',
        marginTop: 5
    },

    chatHeader: {
        width: '100%',
        flexDirection:"row",
        paddingLeft:20,
        height:50,
        
    },

    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        paddingBottom:5
    },

    headerWorkers: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15 ,
        backgroundColor:"#1877f2",
    },

    titleWorkers:{
        fontSize:25,
        color:'white',
        fontWeight:'bold',
        
    },

    back_btn: {
        padding: 7,
    }, 

    scroll: {
        marginTop: 10,
        width:'100%'
    },

    card: {
        width: '100%',
        borderColor: 'black', 
        borderRadius: 7,
        backgroundColor:'white',
        marginBottom:15,
        shadowColor:"black",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5
    },

    cardHeader:{
        fontSize:15,
        flex: 1,
        paddingLeft: 15,
        paddingTop:15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%',
        

    },

    searchHeader:{
        // fontSize:15,
        // paddingLeft: 15,
        // paddingTop:15,
        // justifyContent: 'flex-start',
        alignItems: 'center',
        width:'100%',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom:20
        
    },

    searchBody: {  
        flexDirection:'column',
        height:'80%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },

    containerRow: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        borderColor: '#000', 
        borderRadius: 7,
        backgroundColor:"#fff",
        margin:10,
        shadowColor:"black",
        shadowOffset:{
            width:2,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5

    },

    bodyItemTextInput: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },

    bodyItemTextInputValor: {
        padding: 10,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignContent:'flex-end',
        borderRadius: 7,
        fontSize:19
    },

    label: {
        marginLeft:10,
        marginBottom:2,
        fontSize: 15,
        width: '80%',
        textAlign: "left",
    },

    moneyLabel: {
        marginBottom:2,
        fontSize: 15,
        width: '95%',
        textAlign: 'right',
    },

    saveButton: {
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        width: 100,
        alignItems: 'center',
        backgroundColor: '#28a745',
        elevation: 2,
        borderWidth:1,
        borderColor:"black"
    },

    chatButton: {
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        width: 100,
        alignItems: 'center',
        backgroundColor: '#1877f2',
        elevation: 2,
        borderWidth:1,
        borderColor:"black"
    },

    saveButtonText: {
        color: '#ffffff'
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        width: "100%"
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    openButton: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: 100,
        alignItems: 'center',
        backgroundColor: '#f54b42',
        elevation: 2
    },

    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

    modalBtns: {
        height: 60        
    },

    modalBtns2: {
        flex: 1,
        flexDirection: "row",
    },

    title:{
        alignSelf:'flex-start',
        margin:10,
        marginLeft:25,
        fontSize:19,

    },

    scrollBackground : {
        backgroundColor: '#fff',
        marginTop: 27,
    },

    searchInput: {
        width: '90%',
        height: 40,
        padding: 10,
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor:'white'
    },

    formPicker: {
        width: '90%',
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 7,
        padding:10
    },

    bodyPicker: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        width:'95%',
        height: 38,
        padding: 10,
        borderColor: '#ced4da', 
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor:"white",
        marginBottom:'5%'
    },

    
    pickButton: {
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        width: 150,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        elevation: 2
    },


    flatListRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        marginTop:20
    },

    flatListColumn: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
        height:"100%"
    },

    flatChatColumn: {
        flexDirection: "column",
        width: "100%",
        height: "100%"
    },

    containerLogo: {
        flex:1,
        justifyContent: 'center',
    },

    loginOptions: {
        width: "90%",
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        marginBottom:10,
        marginTop:10,
        
    },

    loginButtons: {
        width: "90%",
        flex: 1,
        flexDirection:'column',
        justifyContent: "space-around",
        alignItems: 'center',
        minHeight:'20%',
        marginBottom:20
    },

    googleBackground: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        borderRadius:5,
        maxHeight: 55,
    },

    googleSet: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "row",
    },

    tinyLogo: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginRight:10
    },

    tinyPhoto:{
        width: 40,
        height: 40,
        borderRadius: 100
    },

    googleBtn: {
        borderRadius: 2,
        backgroundColor: '#fff',
    },

    disclaimer : {
        flex: 1,
        justifyContent: "flex-end",
    },

    loginInput: {
        width: '80%',
        height: 40,
        padding: 10,
        borderColor: '#ced4da', 
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor:"white",
        marginBottom:'5%'
    },
    
    input: {
        width:'95%',
        height: 38,
        padding: 10,
        borderColor: '#ced4da', 
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor:"white",
        marginBottom:'5%',
        alignSelf:'center'
    },
      
    moneyInput: {
        marginRight:20,
        fontSize:16,
        fontWeight:'bold'
    },
      
    searchInputDescription: {
        textAlign: "left",
        textAlignVertical: "top",
        width: '95%',
        maxHeight: 150,
        minHeight:100,
        padding: 10,
        borderColor: '#ced4da', 
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor:"white",
        marginBottom:'5%',
        alignSelf:'center'
    },

    messenger :{
        height:' 80%',
        // display: 'flex',
    },


    chatMenuInput :{
        width: '80%',
        height: 40,
        padding: 10,
        borderColor: '#ced4da', 
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor:"white",
        marginBottom:'5%'
    },

    chatBox :{
        width: '100%',
        height:'90%',
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:'#ced4da',
        paddingTop:0,
        
    
    },

    Box :{
        width: '100%',
        height:'90%',        
        flex:1
    },


    chatBoxWrapper1:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
    },

    chatBoxTop :{
        height: '100%',
        paddingRight: 10,
    },

    chatBoxBottom :{
        flex:1,
        justifyContent: 'space-between',
        height: 40,
        marginBottom: 50,
        left: 5,
        flexDirection:'row',
        paddingTop:5
    },

    chatTitle:{
        marginLeft:25,
        fontSize:19,
    },

    chatMessageInput :{
        width: '80%',
        height: 90,
        padding: 10,
    },

    chatSubmitButton :{
        width: 70,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#1877f2',
        color: 'white',
        alignContent:'center',
        justifyContent:'space-around'
    },

    chatOnline :{
        flex: 3,
    },

    chatMenuWrapper:{
        padding: 10,
        height: '100%',
    },

    chatBoxWrapper2:{
        padding: 10,
        height: '80%',
    },

    chatOnlineWrapper :{
        padding: 10,
        height: '100%',
    },

    noConversationText :{
        position: 'absolute',
        top: '10%',
        fontSize: 50,
        color: '#e0dcdc',
    },

    containerCenter: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems:'center',
        height:'100%'

    },

    containerLeft: {
        flex: 1,
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%',
    },

    

    bodyTitle: {
        width: '100%',
        height:100,
    },

    

    containerSubItem: {
        flexDirection: 'column',
        justifyContent: 'center',
        
    },

    insideLabel: {
        paddingLeft: 10,
        fontSize: 12,
        width: '100%',
        textAlign: "left",
    },

    locationButton: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        width: 150,
        alignItems: 'center',
        backgroundColor: '#28a745',
        borderColor:"#000",
        borderWidth:1
    },
    locationButtonText: {
        textAlign: 'center',
        color: '#ffffff'
    },
    logoutButton: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        width: 150,
        alignItems: 'center',
        backgroundColor: 'red',
        borderColor:'#000',
        borderWidth:1
    },
    logoutButtonText: {
        textAlign: 'center',
        textAlignVertical:'center',
        color: '#ffffff'
    },

    backgroundWhite:{
        backgroundColor:"white"
    },

    flexContainer:{
        flex:1,
        width:"100%"
    }
    
});