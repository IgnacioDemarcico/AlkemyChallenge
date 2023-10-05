import { useEffect, useState } from 'react';
import { StyleSheet} from 'react-native'
import Layout from '../components/Layout';
import Plato from '../components/Plate';
import  Fetch from '../hooks/Fetch';

const PlatoScreen = ({ route }) => {

    const [plato, setPlato] = useState()
    useEffect(() => {
        const fetchPlato = async() => setPlato(await Fetch(route.params.idPlato))
        fetchPlato()
    }, [])
    return (
        <Layout>
            <Plato {...plato} />
        </Layout>
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
