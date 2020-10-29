import React,{ useState, useEffect} from 'react';
import { Text, ScrollView, View,  TouchableHighlight, TextInput, ActivityIndicator, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { styles } from './styles.js';
import { Picker } from '@react-native-picker/picker';
import { getAllCategories } from '../../service/categoriesService';
import { saveNewAd } from '../../service/adService';
import { retrieveData } from '../../service/storage';


export default function AddAds({ navigation }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        async function _init() {
            const res = await getAllCategories();
            if (res) {
                setCategories(res)
            }
            setIsLoading(false)
        };
        _init();
    }, [])

    const saveAd = async () => {
        if (name === '' || description === '' || value === '') {
            Alert.alert(
                "Preenchimento!",
                "Todos os campos devem ser preenchidos!",
                [
                    { text: "OK" }
                ],
                { cancelable: false }
            );
        } else {
            try {
                setIsLoading(true)
                let userId = JSON.parse(await retrieveData('@user'))._id
                let res = await saveNewAd({
                    owner: userId,
                    name,
                    description,
                    images: [],
                    category: selectedCategory,
                    value
                });
    
                if (!res) {
                    throw "Falha ao salvar o serviço, tente novamente";
                } 
                Alert.alert(
                    "Serviço criado!",
                    "O serviço foi criado com sucesso",
                    [
                        { text: "OK", onPress: () => navigation.navigate('MyAds') }
                    ],
                    { cancelable: false }
                );
                setIsLoading(false)
    
            } catch (error) {
                setIsLoading(false)
                console.log(error)
                Alert.alert(
                    "Erro",
                    "Falha ao salvar o serviço, tente novamente",
                    [
                        { text: "OK" }
                    ],
                    { cancelable: false }
                );
            }
        }
    }

    return (
        <ScrollView style={styles.scrollBackground}>
            <View style={styles.container}>
                { isLoading && 
                    <View style={styles.loading}>
                        <ActivityIndicator size='large' color='red' />
                    </View>
                }
                <View style={styles.body}>
                    <View style={styles.bodyText}> 
                        <Text title='AddAds'>Quadrado pra por a imagem</Text>
                    </View>
                    <View style={styles.bodyText}>
                        <Text style={ styles.label }>Título:</Text>
                        <TextInput
                            style={ styles.searchInput }
                            onChangeText={text => setName(text)}
                            value={ name }
                        />
                    </View>
                    <View style={styles.bodyText}>
                        <Text style={ styles.label }>Descrição:</Text>
                        <TextInput
                            multiline={true}
                            numberOfLines={7}
                            style={ styles.searchInputDescription }
                            onChangeText={text => setDescription(text)}
                            value={ description }
                        />
                    </View>
                    <View style={styles.bodyText}>
                        <Text style={ styles.label }>Categoria:</Text>
                        <View style={styles.bodyPicker}>
                            <Picker
                                enabled={!isLoading}
                                selectedValue={ selectedCategory }
                                onValueChange={value => setSelectedCategory(value)}
                                style={styles.formPicker}>
                                    {categories.length > 0 &&
                                        categories.map( category => (
                                            <Picker.Item key={category._id} label={category.name} value={category._id} />
                                        ))
                                    }
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.bodyText}>
                        <Text style={ styles.label }>Valor:</Text>
                        <TextInputMask
                            type={'money'}
                            style={ styles.searchInput }
                            onChangeText={text => setValue(text)}
                            value={ value }
                        />
                    </View>
                    <View style={styles.bodyText}>
                        <TouchableHighlight 
                            onPress={() => saveAd()}
                            underlayColor="#DDDDDD"
                        >
                            <View style={styles.saveButton}>
                                <Text style={styles.saveButtonText}>Salvar</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}