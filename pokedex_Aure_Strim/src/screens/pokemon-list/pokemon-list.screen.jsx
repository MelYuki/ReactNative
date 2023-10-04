import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { Bubbles } from 'react-native-loader';
import SearchBar from '../../components/search-bar';
import PokemonList from '../../containers/pokemon/pokemon-list';
import { fetchPokemon } from '../../services/pokemon.service';
import globalStyle from '../../styles/global.style';

// Mockup de donnée 
const pokemonsMockup = [
  {
    id: 25,
    name: 'Pikachu',
    imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  },
  {
    id: 725,
    name: 'Flamiou',
    imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png'
  }
];

const PokemonListScreen = ({ navigation }) => {

  const [isLoading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    fetchPokemon(0, 151)
      .then((data) => {
        setPokemons(data);
        setLoading(false);
      });
  }, []);

  const handleGoDetail = useCallback((id) => {
    navigation.navigate('detail', { pokemonId: id });
  });

  return (
    <View style={globalStyle.screen}>
      <Text style={globalStyle.title}>Pokemon List</Text>
      {isLoading ? (
        // <ActivityIndicator size='large' color="hotpink" />
        <View style={{alignItems:'center'}}>
         <Bubbles size={50} color="#FF69B4" />
        </View>
      ) : (
        <>
        {console.log(pokemons)}
          <SearchBar />
          <PokemonList
            pokemons={pokemons /* PokemonsMockup */}
            onPokemonSelect={handleGoDetail} />
        </>
      )}

      {/* <Button 
        title='Go Detail !!!'
        onPress={() => handleGoDetail(1)}
        /> */}
    </View>
  );
};

export default PokemonListScreen;