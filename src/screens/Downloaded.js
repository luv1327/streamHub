import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';
import {MovieContext} from '../context/MovieContext';
import ItemDW from '../components/ItemDW';
import styled from 'styled-components';
import {colors} from '../assets/colors/Colors';
import NotDownloaded from '../components/NotDownloaded';

const Downloaded = ({navigation}) => {
  const {downloadedVideos} = useContext(MovieContext);
  console.log(downloadedVideos);
  const renderItem = ({item}) => <ItemDW item={item} navigation={navigation} />;
  return (
    <DownloadsContainer>
      {downloadedVideos.length > 0 ? (
        <DownloadedContent>
          <Title> Downloads </Title>
          <View style={{marginBottom: 140}}>
            <FlatList
              data={downloadedVideos.reverse()}
              renderItem={renderItem}
              keyExtractor={item => item.movie.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </DownloadedContent>
      ) : (
        <NotDownloaded navigation={navigation} />
      )}
    </DownloadsContainer>
  );
};

export default Downloaded;

const DownloadsContainer = styled.View`
  widht: 100%;
  height: 100%;
`;

const DownloadedContent = styled.View`
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin: 20px;
  text-align: center;
  color: ${colors.mainText};
`;
