import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#389bd1',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 27,
        height:100
    },

    loading: {
        position: 'absolute',
        top: "100%",
        zIndex: 100,
        borderRadius: 50,
        backgroundColor: "white"
    },

    headerContainer: {
        height: 50,
        width: '100%',
        borderBottomColor: 'black',
        backgroundColor:"white",
        borderBottomWidth: 1,
    },

    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },

    back_btn: {
        padding: 7,
    }, 

    scroll: {
        marginTop: 10
    },

    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        width: '98%',
        alignItems:'center',
        alignSelf:'center',
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
        marginTop: 10,
        fontSize: 13,
        width: '80%',
        textAlign: "left",
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
        borderRadius: 7
    },

    formPicker: {
        width: '90%',
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 7
    },

    bodyPicker: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 7
    },

    searchInputDescription: {
        textAlign: "left",
        textAlignVertical: "top",
        width: '90%',
        height: 150,
        padding: 10,
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 7
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
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        margin: 5,
    },

    flatListColumn: {
        flex: 1,
        flexDirection: "column",
        width: "90%",
    },

    headerBody:{
        backgroundColor:"#fff",
        width:"100%",
        height:120,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center"
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
        marginBottom:15,
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
        width: 45,
        height: 45,
        marginRight: 10,
        backgroundColor: '#FFF',
        borderRadius: 7,
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
        borderColor: 'black', 
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor:"white",
        marginBottom:'5%'
    },
      

    messenger :{
        height:' 80%',
        display: 'flex',
    },

    chatMenu :{
        flex: 3.5,
    },

    chatMenuInput :{
        width: '90%',
        padding: 10,
        borderBottomWidth: 1,
    },

    chatBox :{
        flex: 5.5,
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
        marginTop: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        backgroundColor: 'teal',
        color: 'white',
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
        height: '100%',
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

    bodyText: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },

    tinyLogo2: {
        width: 40,
        height: 40,
        borderRadius: 100
    },

    bodyTitle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    bodyItem: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        borderColor: '#000', 
        
        borderRadius: 7,
        backgroundColor:"#fff",
        marginBottom:20,
        shadowColor:"black",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5
    },
    bodySubItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
        color: '#ffffff'
    },
    
});