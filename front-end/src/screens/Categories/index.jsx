import React,{ useState, useEffect} from 'react';
import { ActivityIndicator, View, FlatList } from 'react-native';
import { styles } from './styles.js';
import { getAllCategoriesPaginated } from '../../service/categoriesService'

import AdCard from '../../components/AdCard/index.jsx';

export default function Categories({ navigation }) {
    const [ categories, setCategories ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        async function _init() {
            const res = await getAllCategoriesPaginated();
            if (res) {
                setCategories(res)
                setIsLoading(false)
            }
        };
        _init();
    }, [])

    const searchByFilter = item => {
        navigation.navigate("Search", {filter: item})
    }

    return (
        <View style={styles.container}>
            {   isLoading &&
                <View style={styles.loading}>
				    <ActivityIndicator size='large' color='red' />
			    </View>
            }
            { !isLoading &&
                <FlatList
                    style={styles.flatListColumn}
                    data={categories}
                    keyExtractor={item => `${item[0]._id}${Date.now()}`}
                    renderItem={({item}) => (
                        <FlatList 
                            data={item}
                            keyExtractor={item => item._id}
                            style={styles.flatListRow}
                            renderItem={({item}) => (
                                <AdCard key={item._id} item={item} onPressCard={searchByFilter} ></AdCard>
                            )}
                        />
                    )}
                />
            }
        </View>
    )
}