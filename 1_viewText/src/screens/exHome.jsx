import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const ExoHome = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  const [value, setValue] = useState('');

  const handleSubmit = () => {
    setValue(`Je m'appelle ${name} et j'ai ${age} ans`);
    setName('');
    setAge(0);
  };

  return (
    <View>
      <TextInput
        placeholder={'Votre nom'}
        inputMode={'text'}
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        placeholder={'Votre age'}
        inputMode={'numeric'}
        value={age.toString()}
        onChangeText={text => setAge(parseInt(text))}
      />
      <Button title={'Envoyez'} onPress={handleSubmit} />
      <Text>{value}</Text>
    </View>
  );
};

export default ExoHome;
