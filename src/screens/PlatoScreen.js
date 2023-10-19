import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Layout from '../Components/Layout';
import Plate from '../Components/Plate';
import FetchInformation from '../hooks/Fetch';

const PlatoScreen = ({route,navigation}) => {
  const [plate, setPlate] = useState()
  useEffect(() => {
      const fetchPlato = async() => setPlate(await FetchInformation(route.params.idPlate))
      fetchPlato()
  }, [])
  
    return (
      <Layout>
        {plate ? (
          <View>
            <Plate {...plate} />
            <Text style={styles.label}>Vegan: {plate.vegetarian}</Text>
            {console.log(plate.vegetarian)}
            <Text style={styles.label}>Intolerances: {plate.intolerances}</Text>
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