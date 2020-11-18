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
    bodyItemTextInput: {
        
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
    },
    saveButton: {
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        width: 100,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        elevation: 2
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
    }
});