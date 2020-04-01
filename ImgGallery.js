import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import OpenedImg from './pages/OpenedImg';


const Stack = createStackNavigator();

export default function ImgGallery() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          
        />
        <Stack.Screen name="OpenedImg" component={OpenedImg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
