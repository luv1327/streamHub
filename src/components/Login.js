import React, {useContext} from 'react';
import {Text, TextInput, Image, StyleSheet} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {colors} from '../assets/colors/Colors';
import styled from 'styled-components';

const Login = () => {
  const {setEmail, setPassword, login, errMessage} = useContext(AuthContext);
  console.log(errMessage);
  return (
    <LoginContainer>
      <Image
        source={require('../assets/images/Logo.png')}
        style={{alignSelf: 'center', marginBottom: 40}}
      />
      <Text style={styles.title}>Login </Text>
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
        secureTextEntry={true}
      />
      <LoginButton onPress={login}>
        <Text style={{fontFamily: 'Poppins-Bold', color: colors.buttonText}}>
          Login
        </Text>
      </LoginButton>
    </LoginContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 5,
    marginBottom: 20,
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
    marginBottom: 30,
    letterSpacing: 1,
  },
  placeholder: {
    color: '#C4C4C4',
  },
});

const LoginContainer = styled.View`
  width: 90%;
  margin: 30px auto 0 auto;
`;

const LoginButton = styled.TouchableOpacity`
background-color : ${colors.button}
height : 45px;
width : 100%;
align-items: center;
justify-content: center;
margin-top : 20px;
border-radius :5px;
`;
