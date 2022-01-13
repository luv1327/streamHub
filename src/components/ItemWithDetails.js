import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {imageBaseUrl} from './requests';

const ItemWithDetails = ({data, navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.push('Details', {movie: data})}>
        <Image
          source={{uri: `${imageBaseUrl}/${data.poster_path}`}}
          style={{height: 140, width: 90, margin: 9, borderRadius: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ItemWithDetails;
