import React, {useContext} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {AuthContext} from '../context/AuthContext';

const Login = () => {
  const {setEmail, setPassword, login} = useContext(AuthContext);
  return (
    <View>
      <TextInput
        placeholder="Your Email"
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        placeholder="Your Password"
        onChangeText={password => setPassword(password)}
      />
      <TouchableOpacity onPress={login}>
        <Text style={{color: 'blue', fontSize: 50}}> Login </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
