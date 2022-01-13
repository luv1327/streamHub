import React, {useContext} from 'react';
import {Text, TextInput, Image, StyleSheet} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import styled from 'styled-components';
import {colors} from '../assets/colors/Colors';

const Register = () => {
  const {setEmail, setPassword, setUsername, register} =
    useContext(AuthContext);
  return (
    <RegsiterContainer>
      <Image
        source={require('../assets/images/Logo.png')}
        style={{alignSelf: 'center', marginBottom: 30}}
      />
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.text}>Username</Text>
      <TextInput
        placeholder="Your Username"
        onChangeText={username => setUsername(username)}
        placeholderTextColor="#C4C4C4"
        style={styles.input}
      />
      <Text style={styles.text}>Email </Text>
      <TextInput
        placeholderTextColor="#C4C4C4"
        placeholder="Your Email"
        onChangeText={email => setEmail(email)}
        style={styles.input}
      />
      <Text style={styles.text}>Password </Text>
      <TextInput
        placeholder="Your Password"
        placeholderTextColor="#C4C4C4"
        onChangeText={password => setPassword(password)}
        style={styles.input}
      />
      <RegisterButton onPress={register}>
        <Text style={{fontFamily: 'Poppins-Bold', color: colors.buttonText}}>
          Register
        </Text>
      </RegisterButton>
    </RegsiterContainer>
  );
};

export default Register;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 5,
    marginBottom: 15,
    fontFamily: 'Poppins-Regular',
    paddingLeft: 10,
    color: '#C4C4C4',
  },
  text: {
    fontFamily: 'Poppins-Bold',
    color: '#70838F',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 34,
    color: colors.mainText,
    marginBottom: 15,
    letterSpacing: 1,
  },
  placeholder: {
    color: '#C4C4C4',
  },
});

const RegsiterContainer = styled.View`
  width: 90%;
  margin: 30px auto 0 auto;
`;

const RegisterButton = styled.TouchableOpacity`
background-color : ${colors.button}
height : 45px;
width : 100%;
align-items: center;
justify-content: center;
margin-top : 20px;
border-radius :5px;
`;
