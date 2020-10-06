import { StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
        width: 50,
        height: 50,
        marginRight: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
    },
    googleBackground: {
        width: '68%',
        flex: 1,
        elevation: 5,
        flexDirection: "row",
        backgroundColor: '#4285f4',
        alignItems:"center",
        justifyContent: "center",
        maxHeight: 65,
        borderRadius:5,
    },
    googleBtn: {
        borderRadius: 2,
        backgroundColor: '#fff',
    },
});