import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Layout from '../Components/Layout';
import Plate from '../Components/Plate';
import Fetch from '../hooks/Fetch';

const PlatoScreen = () => {
  const [plato, setPlato] = useState()
  useEffect(() => {
      const fetchPlato = async() => setPlato(await Fetch(route.params.idPlate))
      fetchPlato()
  }, [])
  
    return (
      <Layout>
        {plato ? (
          <View>
            <Plato {...plato} />
            <Text style={styles.label}>Diet: {plato.diet}</Text>
            <Text style={styles.label}>Intolerances: {plato.intolerances}</Text>
          </View>
        ) : (
          <View style={styles.loadingContainer}>
            <Text>Cargando información...</Text>
          </View>
        )}
      </Layout>
    );
}


const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default PlatoScreen;
//crear un guardar plato y que este se guarde en el contextState