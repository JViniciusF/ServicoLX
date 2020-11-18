import React,{ useState, useEffect} from 'react';
import { Text, View, ScrollView, TouchableHighlight, ActivityIndicator, Modal, Image } from 'react-native';
import { styles } from './styles.js';
import { favoriteService, retrieveFavorite, incrementHiredService, incrementRatingService } from '../../service/adService'
import { TextMask  } from 'react-native-masked-text';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Rating } from 'react-native-ratings';
import { retrieveData } from '../../service/storage'


export default function Ad({ navigation, route }) {
    const [ isFavorite, setIsFavorite ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ confirmModalVisible, setConfirmModalVisible ] = useState(false);
    const [ rateModalVisible, setRateModalVisible ] = useState(false);
    const [ rate, setRate ] = useState(3);

    useEffect(() => {
        async function _init() {
            setIsLoading(true)
            let userId = JSON.parse(await retrieveData('@user'))._id
            let status = await retrieveFavorite({ userId, id: route.params.value._id })
            setIsFavorite(status.msg)
            setIsLoading(false)
        };
        _init();
    }, [route.params]);

    const setFavorite = async (status) => {
        setIsLoading(true)
        let userId = JSON.parse(await retrieveData('@user'))._id
        let newStatus = await favoriteService({ status, id: route.params.value._id, userId})
        setIsFavorite(newStatus.msg)
        setIsLoading(false)
    };

    const hireService = async () => {
        await incrementHiredService({id:route.params.value._id})
        setConfirmModalVisible(false)
        setRateModalVisible(true)
    };

    const incrementRating = async () => {
        console.log(rate)
        await incrementRatingService({id:route.params.value._id, rate})
        setRateModalVisible(false)
    }

    return (
        <View style={styles.container}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={confirmModalVisible}
                onRequestClose={() => {
                    setConfirmModalVisible(!confirmModalVisible)
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Deseja contratar o Serviço?</Text>
                        <View style={styles.modalBtns}>
                            <View style={styles.modalBtns2}>
                                <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: '#f54b42' }}
                                onPress={() => {
                                    setConfirmModalVisible(!confirmModalVisible);
                                }}>
                                    <Text style={styles.textStyle}>Cancelar</Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                                onPress={() => {
                                    hireService();
                                }}>
                                    <Text style={styles.textStyle}>Contratar</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={rateModalVisible}
                onRequestClose={() => {
                    setRateModalVisible(!rateModalVisible)
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{'Gostou do Serviço? \n Ajude avaliando o serviço abaixo:'}</Text>
                        <Rating
                            type='star'
                            ratingCount={5}
                            defaultRating={3}
                            imageSize={60}
                            showRating
                            onFinishRating={(rating) => setRate(rating)}
                        />
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                            onPress={() => {
                                incrementRating();
                            }}>
                                <Text style={styles.textStyle}>Ok</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <TouchableHighlight 
                        onPress={() => navigation.goBack()}
                        underlayColor="#DDDDDD"
                    >
                        <View style={styles.back_btn}>
                            <Ionicons name="ios-arrow-back" size={30} color="black" />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        onPress={() => setFavorite(!isFavorite) }
                        underlayColor="#DDDDDD"
                    >
                        <View style={styles.back_btn}>
                        { isFavorite ?
                           <AntDesign name="star" size={24} color="yellow" />   
                           :
                           <AntDesign name="staro" size={24} color="black" />
                        }
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            { isLoading &&
                <View style={styles.loading}>
                    <ActivityIndicator size='large' color='red' />
                </View>
            }
            <ScrollView style={styles.scroll}>
                <View style={styles.body}>
                    <View style={styles.bodyItem}>
                        {!route.params.value.images &&
                            <View style={styles.loading}>
                                <ActivityIndicator size='large' color='red' />
                            </View>
                        }
                        {route.params.value.images &&
                            <Image source={{ uri: `data:image/png;base64,${route.params.value.images}` }} style={{ width: "90%", height: 200 }} />
                        }
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={ styles.label }>Título:</Text>
                    <View style={styles.bodyItem}>
                        <Text style={ styles.bodyText }>{route.params.value.name}</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={ styles.label }>Descrição:</Text>
                    <View style={styles.bodyItem}>
                        <Text style={ styles.bodyText }>{route.params.value.description}</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={ styles.label }>Categoria:</Text>
                    <View style={styles.bodyItem}>
                        <Text style={ styles.bodyText }>{route.params.value.category.map(category=>(` ${category.name}`))}</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={ styles.label }>Valor:</Text>
                    <View style={styles.bodyItemTextInput}>
                        <TextMask  
                            type={'money'}
                            style={ styles.bodyText }
                            value={ route.params.value.value } />
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={ styles.label }>Anunciante:</Text>
                    <View style={styles.bodyItem}>
                        <Text style={ styles.bodyText }>{`${route.params.value.owner.name} ${route.params.value.owner.lastName}`}</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={ styles.label }>Localização:</Text>
                    <View style={styles.bodyItem}>
                        <Text style={ styles.bodyText }>{`${route.params.value.owner.address[0].city} - ${route.params.value.owner.address[0].district}`}</Text>
                    </View>
                </View>
                <View style={styles.body}>
                        <TouchableHighlight 
                            onPress={() => setConfirmModalVisible(true)}
                            underlayColor="#DDDDDD"
                        >
                            <View style={styles.saveButton}>
                                <Text style={styles.saveButtonText}>Contratar</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
            </ScrollView>
        </View>
    )
}