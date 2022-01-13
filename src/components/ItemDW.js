import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {imageBaseUrl} from './requests';
import styled from 'styled-components';
import {colors} from '../assets/colors/Colors';

const ItemDW = ({item, navigation}) => {
  const {title, name, poster_path, release_date, overview, vote_average} =
    item.movie;
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {movie: item.movie})}>
        <ImageAndText>
          <DownloadsImage source={{uri: `${imageBaseUrl}/${poster_path}`}} />
          <Texts>
            <Title>{title?.length >= 0 ? title : name} </Title>
            <View>
              <Rating>IMDb - {vote_average ? vote_average : 'NA'}</Rating>
              <ReleaseDate>
                {release_date ? release_date.substring(0, 4) : 'NA'}
              </ReleaseDate>
            </View>
            <Overview>
              {overview ? overview.substring(0, 100) + '...' : 'NA'}
            </Overview>
          </Texts>
        </ImageAndText>
      </TouchableOpacity>
    </View>
  );
};

export default ItemDW;

const DownloadsImage = styled.Image`
  height: 150px;
  width: 100px;
  margin-horizontal: 5px;
  border-radius: 10px;
`;

const ImageAndText = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

const Texts = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 65%;
  margin-left: 5px;
`;

const Title = styled.Text`
  font-size: 18px;
  color: ${colors.mainText};
  max-width: 200px;
  font-weight: bold;
`;

const ReleaseDate = styled.Text`
  color: ${colors.inActiveColor};
`;

const Overview = styled.Text`
  color: ${colors.inActiveColor};
`;

const Rating = styled.Text`
  color: ${colors.inActiveColor};
`;
