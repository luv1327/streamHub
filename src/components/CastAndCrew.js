import React from 'react';
import {Text} from 'react-native';
import {imageBaseUrl} from '../components/requests';
import styled from 'styled-components';
import {colors} from '../assets/colors/Colors';

const CastAndCrew = ({data}) => {
  const {profile_path, name} = data;
  return (
    <Container>
      <CastAndCrewImage source={{uri: `${imageBaseUrl}${profile_path}`}} />
      <CastAndCrewName>{name}</CastAndCrewName>
    </Container>
  );
};

export default CastAndCrew;

const Container = styled.View`
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 40px;
  align-items: center;
`;

const CastAndCrewImage = styled.Image`
  height: 150px;
  width: 100px;
  margin-horizontal: 5px;
  border-radius: 10px;
`;

const CastAndCrewName = styled.Text`
  font-size: 14px;
  color: ${colors.mainText};
  font-weight: bold;
  text-align: center;
  max-width: 96px;
  margin-top: -40px;
`;
