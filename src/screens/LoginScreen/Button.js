import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  btnLogin: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ggBtn: {
    flexDirection: 'row',
  },
  btnTextForgot: {
    fontWeight: 'bold',
  },
});
const Button = ({color, textColor, icon, title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style.btnLogin,
        {
          flex: 1,
          backgroundColor: color,
          borderWidth: !color ? 1 : 0,
          borderColor: 'gray',
          flexDirection: 'row',
          marginRight: 5,
        },
      ]}>
      <Image style={{width: 20, height: 20}} source={icon} />
      <Text style={[style.btnTextForgots, {marginLeft: 10, color: textColor}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
