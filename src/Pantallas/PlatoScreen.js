import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Plato from '../Components/Plato';
import Fetch from '../Hooks/Fetch';

const PlatoScreen = ({ route }) => {

    const [plato, setPlato] = useState()
    useEffect(() => {
        const fetchPlato = async() => setPlato(await Fetch(true, route.params.idPlato))
        fetchPlato()
    }, [])
    return (
         <Plato {...plato} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default PlatoScreen
