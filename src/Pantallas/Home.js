import { FlatList, StyleSheet, Text, View, RefreshControl, TextInput, ScrollView } from 'react-native';
import { useEffect, useRef, useState } from 'react'
import Fetch from '../Hooks/Fetch';
import Layout from '../Components/Layout';
import Plato from '../Components/Plato';

const Home = ({ navigation }) => {
    const [listaPlatos, setListaPlatos] = useState([])

    const [refreshing, setRefresh] = useState(false)
    const [platosFiltrados, setPlatosFiltrados] = useState([])
    const [busqueda, setBusqueda] = useState('')

    const searchPlatos = async () => {
        setRefresh(true)
        const platos = await Fetch(true)
        setRefresh(false)
        setListaPlatos(platos)
        setPlatosFiltrados(platos)
    }

    useEffect(() => { searchPlatos() }, [])

    useEffect(() => {
        if (!busqueda) return
        var nuevosPlatos = [...listaPlatos]
        nuevosPlatos = nuevosPlatos.filter(plato => (
            plato.title.toUpperCase().includes(busqueda.toUpperCase())
        ))
        setPlatosFiltrados(nuevosPlatos)
    }, [busqueda])

    const handleChange = newBusqueda => setBusqueda(newBusqueda)
    
    const handlePress = idPlato => {
        navigation.navigate('Plato', { idPlato })
    }

    return (
        <Layout>
            <Text>Home</Text>
            <TextInput 
                placeholder='Buscar plato...'
                style={styles.textInput}
                onChangeText={handleChange}
                value={busqueda}
            />
            <ScrollView style={{ flex: 1 }}>
                <FlatList
                    nestedScrollEnabled={true}
                    refreshControl={
                        <RefreshControl onRefresh={async () => await searchPlatos()}
                            // colors={['lightcoral']}
                            progressBackgroundColor={'lightblue'}
                            refreshing={refreshing}
                        />
                    }
                    contentContainerStyle={styles.listaPlatos}
                    data={platosFiltrados}
                    renderItem={({ item }) => <Plato {...item} handlePress={() => handlePress(item.id)} />}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    listaPlatos: {
        flex: 1,
        alignItems: 'center',
        gap: 20,
        width: '100%',
        height: '100%',
    },
    textInput: {
        height: 40, 
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1, 
        width: '100%', 
        paddingHorizontal: 10,
        paddingVertical: 5,
    }
})

export default Home
