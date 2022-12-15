
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Home from './Screens/Home';
import Events from './Screens/Events';
import LostItems from './Screens/LostItems';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="LostItems" component={LostItems}/> 
      <Stack.Screen name="Events" component={Events}/>  
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
