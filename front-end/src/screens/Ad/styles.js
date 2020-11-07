import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 27,
    },
    loading: {
        position: 'absolute',
        top: "100%",
        zIndex: 101,
        borderRadius: 50,
        backgroundColor: "white"
    },
    headerContainer: {
        height: 50,
        width: '100%',
        borderBottomColor: 'gray', 
        borderBottomWidth: 1,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
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
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 7
    },  
    bodyText: {
        width: '100%',
        height: 40,
        padding: 10,
    },
    label: {
        marginTop: 10,
        fontSize: 12,
        width: '80%',
        textAlign: "left",
    }
});