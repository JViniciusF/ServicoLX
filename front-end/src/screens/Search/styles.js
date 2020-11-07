import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 27,
        height: '100%'
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

    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    searchInput: {
        width: '80%',
        height: 40,
        padding: 10,
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 7
    },
    iconInput: {

    },
    body: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    bodyText: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
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
    }
});