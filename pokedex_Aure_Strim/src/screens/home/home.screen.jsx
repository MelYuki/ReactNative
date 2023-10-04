import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import globalStyle from '../../styles/global.style';
import pokeball from './pokeball.png';

const HomeScreen = () => {

  return (
    <View style={globalStyle.screen}>
      <Text style={globalStyle.title}>Poké App</Text>
      <View style={style.logoContainer}>
        <Image
          style={style.logo}
          source={pokeball}
          resizeMode='contain'
          resizeMethod='scale'
        />
      </View>
      <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea provident magni ratione eveniet, asperiores esse incidunt totam, ut nobis repellendus ex, reiciendis exercitationem expedita voluptatum quod. Aperiam minima facilis ipsa!</Text>
    </View>
  );
};

const style = StyleSheet.create({
  logoContainer : {
    height: '50%',
    marginHorizontal: 30
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 50
  }
});



export default HomeScreen;