import React from 'react';
import {Text, View, Image} from 'react-native';
import {imageBaseUrl} from '../components/requests';

const CastAndCrew = ({data}) => {
  const {profile_path, name} = data;
  return (
    <View>
      <Image
        source={{uri: `${imageBaseUrl}${profile_path}`}}
        style={{width: 100, height: 100}}
      />
      <Text>{name}</Text>
    </View>
  );
};

export default CastAndCrew;
