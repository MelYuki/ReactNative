import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import Homepage from './src/screens/homepage';
import Products from './src/screens/products';
import Details from './src/screens/details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function App(): JSX.Element {

  const Stack = createStackNavigator()

  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
{/* 
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Homepage} />
        <Stack.Screen name='Products' component={Products} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator> */}

      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name='Home' component={Homepage} />
        <Tab.Screen name='Products' component={Products} />
        <Tab.Screen name='Details' component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;