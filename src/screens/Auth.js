import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Login from '../components/Login';
import Register from '../components/Register';

function Auth() {
  const [toggleRegister, setToggleRegister] = useState(true);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {toggleRegister ? <Login /> : <Register />}

      <TouchableOpacity
        onPress={() => setToggleRegister(prevState => !prevState)}>
        <Text> {toggleRegister ? 'Register' : 'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Auth;
