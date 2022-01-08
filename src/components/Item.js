import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {imageBaseUrl} from './requests';

const Item = ({data, navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.push('Details', {movie: data})}>
        <Image
          source={{uri: `${imageBaseUrl}/${data.poster_path}`}}
          style={{height: 50, width: 50}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Item;
