import { FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const PokemonListItem = ({ id, name, imgUrl, onSelect }) => (
  <TouchableHighlight
    onPress={() => onSelect(id)}
    activeOpacity={0.8}
    underlayColor="lightpink">
    <View style={style.item}>
      <Text style={{ ...style.itemText, ...style.itemId }}>{id}</Text>
      <Text style={{ ...style.itemText, ...style.itemName }}>{name}</Text>
      <Image
        style={style.itemImage}
        source={{ uri: imgUrl }}
        resizeMode='contain'
      />
    </View>
  </TouchableHighlight>
);

const PokemonList = ({ pokemons, onPokemonSelect }) => (
  <FlatList
    data={pokemons}
    // renderItem={({item}) => <PokemonListItem id={item.id} name={item.name} imgUrl={item.imgUrl} />}
    renderItem={({ item }) => <PokemonListItem {...item} onSelect={onPokemonSelect} />}
    keyExtractor={(item) => item.id}
  />
);

const style = StyleSheet.create({
  item: {
    flexDirection: 'row',
    gap: 5,
    marginHorizontal: 10,
    marginBottom: 5,
    alignItems: 'center'
  },
  itemId: {
    minWidth: 75,
    color: 'crimson'
  },
  itemName: {
    flexGrow: 1
  },
  itemText: {
    color: 'black',
    fontSize: 30
  },
  itemImage: {
    width: 100,
    height: 100
  }
});

export default PokemonList;