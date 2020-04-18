import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'gray',
  },
  title: {
    marginVertical: 10,
  },
});

const Input = ({placeholder, secureTextEntry, onChangeText, value}) => {
  return (
    <View>
      <Text style={style.title}>{placeholder}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={style.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;
