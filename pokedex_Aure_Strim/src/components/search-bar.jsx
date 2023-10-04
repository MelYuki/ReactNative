import { React, useCallback, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const SearchBar = ({ onSearch }) => {

  const [query, setQuery] = useState('');

  const handleChangeQuery = useCallback((text) => {
    setQuery(text);
  }, []);

  const handleQuerySubmit = useCallback(() => {
    onSearch(query);
  }, []);

  return (
    <View style={style.searchBar}>
      <TextInput
        style={style.textInput}
        placeholder='Recherche: Pikachu...'
        placeholderTextColor='hotpink'
        underlineColorAndroid='hotpink'
        value={query}
        
        onChangeText={handleChangeQuery} />
      <Button
        title='Search'
        onPress={handleQuerySubmit}
        color='hotpink' />
    </View>
  );
};

SearchBar.defaultProps = {
  onSearch: () => { } // NOOP
};

const style = StyleSheet.create({
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    gap: 5,
    alignItems: 'center'
  },
  textInput : {
    flexGrow: 1
  }
})

export default SearchBar;
