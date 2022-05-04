import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        padding: 5,
        borderRadius: 7,
        borderWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        maxWidth:160,
        minWidth:160,
        maxHeight:185,
        minHeight:185
    },
    loading: {
        position: "absolute",
        top: "75%",
        zIndex: 100,
        borderRadius: 50,
        backgroundColor: "white"
    },
    card: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 150,
        borderRadius: 7,
        borderWidth: 1,
        
    },
    tinyLogo: {
        width: '100%',
        height: '100%', 
        borderRadius: 7,
    }
});