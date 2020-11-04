import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        padding: 5,
        borderRadius: 10,
        borderWidth: 2
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
        borderRadius: 10,
        borderWidth: 2
    },
    tinyLogo: {
        width: '100%',
        height: '100%', 
    }
});