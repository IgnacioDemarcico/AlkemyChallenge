import { FlatList, StyleSheet, Text, View, RefreshControl, TextInput, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import Fetch from '../Hooks/Fetch';
import Layout from '../Components/Layout';
import Plato from '../Components/Plato';

const Home = ({ navigation }) => {
  const [listaPlatos, setListaPlatos] = useState([]);
  const [refreshing, setRefresh] = useState(false);
  const [platosFiltrados, setPlatosFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  const searchPlatos = async () => {
    setRefresh(true);
    const platos = await Fetch();
    setRefresh(false);
    setListaPlatos(platos);
    setPlatosFiltrados(platos);
  };

  useEffect(() => {
    searchPlatos();
  }, []);

  useEffect(() => {
    if (!busqueda) return;
    const nuevosPlatos = [...listaPlatos];
    const platosFiltrados = nuevosPlatos.filter((plato) =>
      plato.title.toUpperCase().includes(busqueda.toUpperCase())
    );
    setPlatosFiltrados(platosFiltrados);
  }, [busqueda, listaPlatos]);

  const handleChange = (newBusqueda) => setBusqueda(newBusqueda);

  const handlePress = (idPlato) => {
    navigation.navigate('Plato', { idPlato });
  };

  return (
    <Layout>
      <TextInput
        placeholder="Search"
        style={styles.textInput}
        onChangeText={handleChange}
        value={busqueda}
      />
      <ScrollView style={styles.container}>
        <FlatList
          nestedScrollEnabled={true}
          refreshControl={
            <RefreshControl
              onRefresh={async () => await searchPlatos()}
              progressBackgroundColor="lightblue"
              refreshing={refreshing}
            />
          }
          data={platosFiltrados}
          renderItem={({ item }) => <Plato {...item} handlePress={() => handlePress(item.id)} />}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
});

export default Home;
