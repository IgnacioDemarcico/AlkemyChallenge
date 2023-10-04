import { FlatList,StyleSheet,RefreshControl,TextInput,ScrollView} from 'react-native';
import { useEffect, useState } from 'react';
import Fetch from '../Hooks/Fetch';
import Layout from '../Components/Layout';
import Plate from '../Components/Plate';

const Home = ({ navigation }) => {
  const [platesList, setPlatesList] = useState([]);
  const [filterdPlates, setFilteredPlates] = useState([]);
  const [search, setSearch] = useState('');
  const [refreshing, setRefresh] = useState(false);

  const searchPlates = async () => {
    setRefresh(true);
    const plates = await Fetch();
    setRefresh(false);
    setPlatesList(plates);
    setFilteredPlates(plates);
  };

  useEffect(() => {
    searchPlates();
  }, []);

  useEffect(() => {
    if (!search) return;
    const newPlate = [...platesList];
    const filteredPlates = newPlate.filter((plate) =>
      plate.title.toUpperCase().includes(search.toUpperCase())
    );
    setFilteredPlates(filteredPlates);
  }, [search, platesList]);

  const handleChange = (newSearch) => setSearch(newSearch);

  const handlePress = (idPlate) => {
    navigation.navigate('Plate', { idPlate: idPlate });
  };

  return (
    <Layout>
      <TextInput
        placeholder="Search plate"
        style={styles.textInput}
        onChangeText={handleChange}
        value={search}
      />
      <ScrollView style={styles.container}>
        <FlatList
          nestedScrollEnabled={true}
          refreshControl={
            <RefreshControl
              onRefresh={async () => await searchPlates()}
              refreshing={refreshing}
            />
          }
          data={filterdPlates}
          renderItem={({ item }) => <Plate {...item} handlePress={() => handlePress(item.id)} />}
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
    marginbottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Home;
