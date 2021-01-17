import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerContainer: {
        height: 80,
        width: '100%',
        marginTop: 5
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
    headerFilter: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    filterText: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 25,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
    },
    filterTextMajor: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: "#404040",
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
    },
    filterTextMinor: {
        backgroundColor: "#e92f2f",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 25,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
    }
});