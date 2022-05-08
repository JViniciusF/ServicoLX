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
        borderRadius: 25,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor:'white'
    },
    filterTextMajor: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: "#404040",
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
    },
    filterTextMinor: {
        backgroundColor: "#e92f2f",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 25,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
    },

    iconInput:{
        backgroundColor:'white',
        borderRadius:7,
        borderWidth:1,
        width:50,
        height:40,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    }
});