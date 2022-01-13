import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import Login from '../components/Login';
import Register from '../components/Register';
import {colors} from '../assets/colors/Colors';
import styled from 'styled-components';

function Auth() {
  const [toggleRegister, setToggleRegister] = useState(true);
  return (
    <ScrollView
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: colors.background,
      }}>
      {toggleRegister ? <Login /> : <Register />}
      {toggleRegister ? (
        <AuthToggleContainer>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              marginRight: 2,
              color: colors.mainText,
            }}>
            Don`t have an account?
          </Text>
          <TouchableOpacity
            onPress={() => setToggleRegister(prevState => !prevState)}>
            <AuthText
              style={{
                fontFamily: 'Poppins-Bold',
                borderBottomColor: colors.tabBarIcon,
                borderBottomWidth: 2,
                marginLeft: 5,
              }}>
              Register
            </AuthText>
          </TouchableOpacity>
        </AuthToggleContainer>
      ) : (
        <AuthToggleContainer>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              marginRight: 2,
              color: colors.mainText,
            }}>
            Already have an account ?
          </Text>
          <TouchableOpacity
            onPress={() => setToggleRegister(prevState => !prevState)}>
            <AuthText
              style={{
                fontFamily: 'Poppins-Bold',
                borderBottomColor: colors.tabBarIcon,
                borderBottomWidth: 2,
                marginLeft: 5,
              }}>
              Login
            </AuthText>
          </TouchableOpacity>
        </AuthToggleContainer>
      )}
    </ScrollView>
  );
}

export default Auth;

const AuthToggleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 40px auto 0 auto;
`;

const AuthText = styled.Text`
  color: ${colors.tabBarIcon};
`;
