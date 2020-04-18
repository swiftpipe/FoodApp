import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import SplashImage from '../../assets/Splash.png';
import {useNavigation} from '@react-navigation/native';
const style = StyleSheet.create({
  bg: {
    flex: 1,
  },
});

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      goToLogin();
    }, 3000);
  }, []);

  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return <ImageBackground style={style.bg} source={SplashImage} />;
};

export default Splash;
