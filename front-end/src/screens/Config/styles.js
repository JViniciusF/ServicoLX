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
        flex: 1,
        justifyContent: 'center',
        zIndex: 100,
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
    tinyLogo: {
        width: 40,
        height: 40,
        borderRadius: 100
    },
    scroll: {
        marginTop: 10,
        width: '100%'
    },
    bodyTitle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
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
        borderRadius: 7,
    },
    bodySubItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyText: {
        width: '100%',
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
    },
    label: {
        marginTop: 10,
        fontSize: 12,
        width: '80%',
        textAlign: "left",
    },
    insideLabel: {
        paddingLeft: 10,
        fontSize: 12,
        width: '100%',
        textAlign: "left",
    },
    title: {
        
    },
    locationButton: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        width: 150,
        alignItems: 'center',
        backgroundColor: '#2196F3'
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
        backgroundColor: '#ff6961'
    },
    logoutButtonText: {
        textAlign: 'center',
        color: '#ffffff'
    }
});