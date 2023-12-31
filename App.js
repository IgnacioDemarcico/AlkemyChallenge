import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import PlatoScreen from './src/screens/PlatoScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'lightblue',
          },
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name='Plato'
          component={PlatoScreen}
          options={{
            title: "Plato",
            headerStyle: {
              backgroundColor: 'white',
            },
          }}
        />
        {/*<Stack.Screen name="Login" component={Login} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
