import React, {useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';

const Home = () => {
  const [inputVal, setInputVal] = useState('');
  const [text, setText] = useState('');

  const handleChange = (text) => {
    setInputVal(text);
  };

  const handleSubmit = () => {
    setText(inputVal);
    setTimeout(() => {
      setInputVal('');
    }, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View>
        <TextInput
          placeholder={'Entrez votre texte'}
          inputMode={'text'}
          onChangeText={handleChange}
          value={inputVal}
        />
        <Button title={'Validez'} onPress={handleSubmit} />
        <Text>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#a9a9a9',
  },
});
export default Home;
