import React,{ useState, useEffect} from 'react';
import { Text, ScrollView, View,  TouchableHighlight, TextInput, ActivityIndicator, Alert, Image  } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import * as ImagePicker from 'expo-image-picker';
import { styles } from '../../utils/styles.js' 
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
    const [isLoading, setIsLoading] = useState(true);
    const [celphone, setCelphone] = useState('');
    const [ image, setImage ] = useState(null);

    
    useEffect(() => {
        async function _init() {
            const res = await getAllCategories();
            if (res) {
                setCategories(res)
            }
            setIsLoading(false)
        };
        _init();

        async function requestMediaPermission() {
            try {
                let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                    
                if (status !== 'granted') {
                    Alert.alert(
                        "Permissão de acesso à mídia",
                        "Este aplicativo utiliza de acesso às fotos para trazer a melhor experiência, criando serviços com fotos a partir do seu dispositivo móvel!",
                        [
                            { text: "OK", onPress: () => requestMediaPermission() }
                        ],
                        { cancelable: false }
                        );
                }
            } catch (error) {
                requestMediaPermission();
            }
        }

        requestMediaPermission();

    }, [])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        });
    
        if (!result.cancelled) {
            setImage(result.base64);
        }   
    };
    

    const saveAd = async () => {
        if (name === '' || description === '' || value === '' || celphone === '' || image === '') {
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
                    celphone,
                    images: image,
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
            <View style={styles.body}>
                { isLoading && 
                    <View style={styles.loading}>
                        <ActivityIndicator size='large' color='red' />
                    </View>
                }
                <View style={styles.card}>
                    <View style={styles.bodyText}> 
                        {!image && 
                            <Image source={{ uri: `https://www.fotoefeitos.com/efectos/grandes/coloca-tu-foto-en-un-fotograma.jpg` }} style={{ width: "90%", height: 200 }} />
                        }
                        {image &&
                            <Image source={{ uri: `data:image/png;base64,${image}` }} style={{ width: "90%", height: 200 }} />
                        }
                    </View>
                    <View style={styles.bodyText}> 
                        <TouchableHighlight 
                            onPress={() => pickImage()}
                            underlayColor="#DDDDDD"
                        >
                            <View style={styles.pickButton}>
                                <Text style={styles.saveButtonText}>{!image ? 'Selecionar Imagem' : 'Alterar Imagem'}</Text>
                            </View>
                        </TouchableHighlight>
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
                        <Text style={ styles.label }>Telefone:</Text>
                        <TextInputMask
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99) '
                            }}
                            style={ styles.searchInput }
                            onChangeText={text => setCelphone(text)}
                            value={ celphone }
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