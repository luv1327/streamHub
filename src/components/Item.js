import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {imageBaseUrl} from './requests';
import styled from 'styled-components';

const Item = ({data, navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.push('Details', {movie: data})}>
        <RowImage source={{uri: `${imageBaseUrl}/${data.poster_path}`}} />
      </TouchableOpacity>
    </View>
  );
};

export default Item;

const RowImage = styled.Image`
  height: 150px;
  width: 100px;
  margin-horizontal: 5px;
  border-radius: 10px;
`;
