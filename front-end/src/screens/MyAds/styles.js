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
    flatListRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        margin: 5,
    },
    flatListColumn: {
        flex: 1,
        flexDirection: "column",
        width: "90%",
    },
    bodyText: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    }
});