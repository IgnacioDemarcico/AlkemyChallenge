import { useEffect, useState } from 'react';
import { StyleSheet} from 'react-native'
import Plate from '../components/Plate';
import Fetch from '../hooks/Fetch';

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
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default PlatoScreen
