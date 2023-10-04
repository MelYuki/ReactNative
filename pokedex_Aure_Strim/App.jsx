import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home/home.screen';
import PokemonListScreen from './src/screens/pokemon-list/pokemon-list.screen';
import PokemonFavScreen from './src/screens/pokemon-fav/pokemon-fav.screen';
import PokemonDetailScreen from './src/screens/pokemon-detail/pokemon-detail.screen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function App() {

  const AppTabMenu = useCallback(() => (
    <Tab.Navigator initialRouteName='home' >
      <Tab.Screen name='home' component={HomeScreen} />
      <Tab.Screen name='pokeList' component={PokemonListScreen} />
      <Tab.Screen name='pokeFav' component={PokemonFavScreen} />
    </Tab.Navigator>
  ), []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={styles.statusBar.backgroundColor}
      />

      <Stack.Navigator initialRouteName='menu'>
        <Stack.Screen
          name='menu'
          component={AppTabMenu}
          options={{
            headerShown: false
          }} />

        {/* <Stack.Screen
          name='detail'
          component={PokemonDetailScreen}
          options= {({route}) => ({
            title: `Pokemon ${route.params.pokemonId}`
          })} /> */}
        <Stack.Screen
          name='detail'
          component={PokemonDetailScreen} />
      </Stack.Navigator>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'hotpink',
  },
});

export default App;