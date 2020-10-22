import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';


export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 27,
        width: '100%',
        paddingLeft: 10
    },
    loading: {
        position: "absolute",
        top: "75%",
        zIndex: 100,
        borderRadius: 50,
        backgroundColor: "white"
    }
});