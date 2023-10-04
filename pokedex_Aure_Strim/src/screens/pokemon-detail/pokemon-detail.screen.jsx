import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import globalStyle from '../../styles/global.style';

const PokemonDetailScreen = ({ navigation, route }) => {

  const {pokemonId} = route.params;

  useEffect(() => {
    navigation.setOptions({ title: `Pokemon ${pokemonId}` })
  }, [pokemonId])

  return (
    <View style={globalStyle.screen}>
      <Text style={globalStyle.title}>Pokemon Detail {pokemonId}</Text>

    </View>
  );
};

export default PokemonDetailScreen;