import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 27
    },
    loading: {
        position: "absolute",
        top: "75%",
        zIndex: 100,
        borderRadius: 50,
        backgroundColor: "white"
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
        backgroundColor: '#4285f4',
        justifyContent: "center",
        borderRadius:5,
        maxHeight: 65,
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
        width: 50,
        height: 50,
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
    }
});