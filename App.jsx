import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import fetchdata from './utils/fetchdata';
import Row from './components/Row';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import {NavigationContainer} from '@react-navigation/native';

// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Tvseries from './pages/Tvseries';
import Login from './pages/Login';
import MoviePlayer from './pages/MoviePlayer';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="Tvseries" component={Tvseries} />
        <Stack.Screen name="MoviePlayer" component={MoviePlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
