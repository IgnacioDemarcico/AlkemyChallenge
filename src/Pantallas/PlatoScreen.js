import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Plate from '../Components/Plate';
import Fetch from '../Hooks/Fetch';

const PlatoScreen = ({ route }) => {

    const [plate, setPlate] = useState()
    useEffect(() => {
        const fetchPlate = async() => setPlate(await Fetch(true, route.params.idPlate))
        fetchPlate()
    }, [])
    return (
         <Plate {...plate} />
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
