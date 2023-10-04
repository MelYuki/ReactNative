import React from 'react';
import "react-native-gesture-handler"
import Home from './src/screens/home';
import List from './src/screens/list';
import Pokemon from './src/screens/pokemon';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='List' component={List} />
        <Stack.Screen name='Pokemon' component={Pokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
