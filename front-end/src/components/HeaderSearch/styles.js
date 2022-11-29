import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerContainer: {
        height: 80,
        width: '100%',
        marginTop: 5
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    searchInput: {
        width: '80%',
        height: 40,
        padding: 10,
        borderColor: '#000', 
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor:'white'
        
    },
    headerFilter: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop:30
        
    },
    filterText: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor:'white',
        height:35,
        width:100,
        alignContent:'center',
        alignItems:'center',
        justifyContent:"center",
        borderColor: '#ced4da', 
    },
    filterTextMajor: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: "#1877f2",
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
        height:35,
        width:100,
        alignContent:'center',
        alignItems:'center',
        justifyContent:"center",
        borderColor: '#ced4da', 
    },
    filterTextMinor: {
        backgroundColor: "#e92f2f",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
        height:35,
        width:100,
        alignContent:'center',
        alignItems:'center',
        justifyContent:"center",
        borderColor: '#ced4da', 
    },

    iconInput:{
        backgroundColor:'white',
        borderRadius:7,
        borderWidth:1,
        width:50,
        height:40,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        
    }
});