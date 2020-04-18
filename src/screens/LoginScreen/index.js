import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Input from './Input';
import Button from './Button';

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  wrapper: {
    padding: 14,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  btnTextForgot: {
    fontWeight: 'bold',
  },
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 20,
  },
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
});

const LoginScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.wrapper}>
        <Text style={style.header}>Sign In</Text>
        <View>
          <Input placeholder={'Email ID'} />
          <Input placeholder={'Password'} secureTextEntry />
        </View>
        <View style={style.forgotContainer}>
          <TouchableOpacity>
            <Text style={style.btnTextForgot}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={style.btnLogin}>
          <Text style={[style.btnTextForgot, {color: 'white'}]}>SignIn</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', padding: 20}}>or</Text>
        <View style={style.ggBtn}>
          <Button
            title="Google"
            icon={require('../../assets/googleIcon.png')}
          />
          <Button
            title="Facebook"
            icon={require('../../assets/fbIcon.png')}
            color={'#4a6ea8'}
            textColor="#fff"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text>Not yet a member,</Text>
          <TouchableOpacity>
            <Text style={[style.btnTextForgot, {color: 'red'}]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
