import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {imageBaseUrl} from './requests';

const ItemDW = ({item, navigation}) => {
  const {title, name, poster_path, release_date} = item.movie;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {movie: item.movie})}>
      <Image
        source={{uri: `${imageBaseUrl}/${poster_path}`}}
        style={{height: 150, width: 100}}
      />
      <Text> {title?.length >= 0 ? title : name} </Text>
      <Text> {release_date} </Text>
    </TouchableOpacity>
  );
};

export default ItemDW;
