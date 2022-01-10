import React, {useContext} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {AuthContext} from '../context/AuthContext';

const Register = () => {
  const {setEmail, setPassword, setUsername, register} =
    useContext(AuthContext);
  return (
    <View>
      <TextInput
        placeholder="Your Username"
        onChangeText={username => setUsername(username)}
      />
      <TextInput
        placeholder="Your Email"
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        placeholder="Your Password"
        onChangeText={password => setPassword(password)}
      />
      <TouchableOpacity onPress={register}>
        <Text style={{color: 'blue', fontSize: 50}}> Create Account </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
