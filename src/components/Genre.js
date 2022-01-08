import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
const Genre = ({data, navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SearchComplete', {data})}>
        <Text>{data.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Genre;
