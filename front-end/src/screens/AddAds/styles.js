import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    scrollBackground : {
        backgroundColor: '#fff',
        marginTop: 27,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 27,
        height: '100%'
    },
    loading: {
        position: "absolute",
        top: "75%",
        zIndex: 100,
        borderRadius: 50,
        backgroundColor: "white"
    },
    searchInput: {
        width: '90%',
        height: 40,
        padding: 10,
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 7
    },
    iconInput: {

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
    body: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    bodyText: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
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
    label: {
        fontSize: 12,
        width: '80%',
        textAlign: "left",
    },
    saveButton: {
        padding: 10,
        borderRadius: 10,
        width: 100,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    saveButtonText: {
        color: '#ffffff'
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
});