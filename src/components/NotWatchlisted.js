import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {colors} from '../assets/colors/Colors';

const NotWatchlisted = ({navigation}) => {
  return (
    <Container>
      <Image
        source={require('../assets/images/watchlist.png')}
        style={{
          height: 200,
          width: 200,
          borderWidth: 1,
          borderColor: colors.background,
          marginBottom: 30,
        }}
      />
      <Text
        style={{
          color: colors.mainText,
          fontSize: 18,
          fontFamily: 'Poppins-Bold',
          marginBottom: 5,
        }}>
        Browse Now, Watch Later
      </Text>
      <TouchableOpacity OnPress={() => navigation.push('Content')}>
        <Text
          style={{
            color: colors.inActiveColor,
            fontSize: 12,
            fontFamily: 'Poppins-Regular',
          }}>
          Explore To Watclist {'>'}
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default NotWatchlisted;

const Container = styled.View`
  positon: absolute;
  top: 20%;
  display: flex;
  align-items: center;
`;
