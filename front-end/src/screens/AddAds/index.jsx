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
    const [ image, setImage ] = useState();

    
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
                    <View style = {styles.containerRow}>
                        <View style = {styles.containerLeft}>
                             
                            {!image && 
                                <Image source={{ uri: `data:image/png;base64,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` }} style={{ width: "100%", height: 200 }} />
                            }
                            {image &&
                                <Image source={{ uri: `data:image/png;base64,${image}` }} style={{ width: "100%", height: 200 }} />
                            }
                            {/* </View> */}
                            <View style = {[styles.containerCenter,{alignSelf:'center'}]}>
                                <TouchableHighlight 
                                    onPress={() => pickImage()}
                                    underlayColor="#DDDDDD"
                                >
                                    <View style={styles.pickButton}>
                                        <Text style={styles.saveButtonText}>{!image ? 'Selecionar Imagem' : 'Alterar Imagem'}</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        
                            <Text style={ styles.label }>Título:</Text>
                            <TextInput
                                style={ styles.input }
                                onChangeText={text => setName(text)}
                                value={ name }
                            />
                        
                        
                            <Text style={ styles.label }>Descrição:</Text>
                            <TextInput
                                multiline={true}
                                numberOfLines={7}
                                style={ styles.searchInputDescription }
                                onChangeText={text => setDescription(text)}
                                value={ description }
                            />
                        
                        
                            <Text style={ styles.label }>Telefone:</Text>
                            <TextInputMask
                                type={'cel-phone'}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99) '
                                }}
                                style={ styles.input }
                                onChangeText={text => setCelphone(text)}
                                value={ celphone }
                            />
                        
                        
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
                        
                        
                            <Text style={ styles.label }>Valor:</Text>
                            <TextInputMask
                                type={'money'}
                                style={ styles.input }
                                onChangeText={text => setValue(text)}
                                value={ value }
                            />
                        
                            <View style = {[styles.containerCenter,{alignSelf:'center'}]}>

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
                </View>
            </View>
        </ScrollView>
    )
}