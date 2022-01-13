import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';
import {colors} from '../assets/colors/Colors';
const Genre = ({data, navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SearchComplete', {data})}>
        <GenreTextAndIcon
          style={{
            borderTopWidth: 1,
            borderTopColor: colors.border,
          }}>
          <GenreTitle>{data.title}</GenreTitle>
          <View style={{marginRight: 30}}>
            <Icon
              name="keyboard-arrow-right"
              color={colors.inActiveColor}
              size={30}
            />
          </View>
        </GenreTextAndIcon>
      </TouchableOpacity>
    </View>
  );
};

export default Genre;

const GenreTitle = styled.Text`
  color: ${colors.inActiveColor};
  font-size: 14px;
`;

const GenreTextAndIcon = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;
