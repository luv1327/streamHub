import React, {useContext} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {colors} from '../assets/colors/Colors';
import styled from 'styled-components';

const Login = () => {
  const {setEmail, setPassword, login} = useContext(AuthContext);

  return (
    <LoginContainer>
      <LogoContainer>
        <StreamText>Stream</StreamText>
        <HubText>Hub</HubText>
      </LogoContainer>
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
    fontSize: 24,
    color: colors.mainText,
    marginBottom: 10,
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

const LogoContainer = styled.Text`
  margin: 0px auto 30px auto;
  color: ${colors.mainText};
`;

const StreamText = styled.Text`
  font-size: 40px;
  font-family: 'Poppins-Bold';
  color: ${colors.tabBarIcon};
`;

const HubText = styled.Text`
  font-size: 40px;
  font-family: 'Poppins-Bold';
  color: #fff;
`;
