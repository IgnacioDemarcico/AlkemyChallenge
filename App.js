import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Pantallas/Home';
import PlatoScreen from './src/Pantallas/PlatoScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}
          options={({navigation}) => ({
            title: "Home",
            headerStyle: {
              backgroundColor: 'lightcoral'
            },
        })} />
        <Stack.Screen name='Plato' component={PlatoScreen}
          options={() => ({
            title: "Plato",
            headerStyle: {
              backgroundColor: 'lightgreen'
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  headerRight: {
    padding: 10,
  }
})