import AsyncStorage from '@react-native-community/async-storage';

export async function storeData(key, string) {
    try {
        await AsyncStorage.setItem(key, string)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}

export async function retrieveData(key) {
    try {
        let value = await AsyncStorage.getItem(key)
        if (value)
            return value
    } catch (e) {
        console.log(e)
        return null
    }
}

export async function removeData(key) {
    try {
        await AsyncStorage.removeItem(key)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}

export default { storeData, retrieveData, removeData }