import React,{ useState, useEffect} from 'react';
import { Text, View, ScrollView, TouchableHighlight, ActivityIndicator, Modal, Image,Button } from 'react-native';
import { styles } from '../../utils/styles.js' 
import { favoriteService, retrieveFavorite, incrementHiredService, incrementRatingService } from '../../service/adService'
import { TextMask  } from 'react-native-masked-text';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Rating } from 'react-native-ratings';
import { retrieveData } from '../../service/storage'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Ad({ navigation, route }) {
    const [ isFavorite, setIsFavorite ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ confirmModalVisible, setConfirmModalVisible ] = useState(false);
    const [ rateModalVisible, setRateModalVisible ] = useState(false);
    const [ rate, setRate ] = useState(3);
    const [userId, setUserId] = useState (null);

    useEffect(() => {
        async function _init() {
            setIsLoading(true)
            setUserId(JSON.parse(await retrieveData('@user'))._id)
            let status = await retrieveFavorite({ userId, id: route.params.value._id })
            setIsFavorite(status.msg)
            setIsLoading(false)
        };
        _init();
    }, [route.params,userId]);

    const setFavorite = async (status) => {
        let userId = JSON.parse(await retrieveData('@user'))._id
        let newStatus = await favoriteService({ status, id: route.params.value._id, userId})
        setIsFavorite(newStatus.msg)
    };

    const hireService = async () => {
        await incrementHiredService({id:route.params.value._id})
        setConfirmModalVisible(false)
        setRateModalVisible(true)
    };

    const incrementRating = async () => {
        await incrementRatingService({id:route.params.value._id, rate})
        setRateModalVisible(false)
    }

    const OpenMessenger = (value) => {
        navigation.navigate("Messenger", { value })
    }

    return (
        <View style={styles.body}>

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
                    <TouchableOpacity 
                        onPress={() => navigation.goBack()}
                        activeOpacity={1}
                    >
                        <View style={styles.back_btn}>
                            <Ionicons name="ios-arrow-back" size={30} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => setFavorite(!isFavorite) }
                        activeOpacity={1}
                    >
                        <View style={styles.back_btn}>
                        { isFavorite ?
                           <AntDesign name="star" size={24} color="yellow" />   
                           :
                           <AntDesign name="staro" size={24} color="black" />
                        }
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            { isLoading &&
                <View style={styles.loading}>
                    <ActivityIndicator size='large' color='red' />
                </View>
            }
            <ScrollView style={styles.scroll}>
                <View style={styles.card}>
                    
                        <View style={styles.containerCenter}>
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
                <View style={styles.card}>
                            
                    <Text style={ styles.title }>{route.params.value.name}</Text>

                    <Text style={ styles.moneyLabel}>
                        <TextMask type={'money'} style={ styles.moneyInput } value={ route.params.value.value } />
                    </Text>
                        <View style = {styles.containerLeft}>
                            <Text style = {styles.label}>Descrição:</Text>
                            <Text style={ styles.searchInputDescription}>{route.params.value.description}</Text>


                            <Text style={ styles.label }>Anunciante:</Text>

                            <Text style={ styles.input }>{`${route.params.value.owner.name} ${route.params.value.owner.lastName}`}</Text>


                            <Text style={ styles.label }>Localização:</Text>

                            <Text style={ styles.input }>{`${route.params.value.owner.address[0].district},${route.params.value.owner.address[0].city}`}</Text>

                            <Text style={ styles.label }>Categoria:</Text>
                            <Text style={ styles.input}>{route.params.value.category.map(category=>(` ${category.name}`))}</Text>

                            <Text style={ styles.label }>Avaliações:</Text>
                            <Text style={ styles.input}>{route.params.value.rating}</Text>

                            <Text style={ styles.label }>Telefone:</Text>
                            <Text style={ styles.input}>{route.params.value.celphone}</Text>
                        </View>

                </View>
                <View style = {styles.card}>
                        {route.params.value.owner._id != userId && 
                        <View style = {[styles.containerCenter,{flexDirection:'row',justifyContent:'space-around'}]}>
                            <TouchableHighlight 
                                onPress={() => setConfirmModalVisible(true)}
                                underlayColor="#DDDDDD"
                            >
                                <View style={styles.saveButton}>
                                    <Text style={styles.saveButtonText}>Avaliar</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight 
                                onPress={() => OpenMessenger(route.params.value.owner)}
                                underlayColor="#DDDDDD"
                            >
                                <View style={styles.chatButton}>
                                    <Text style={styles.saveButtonText}>Chat</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        }
                </View>
            </ScrollView>
        </View>
    )
}