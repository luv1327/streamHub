import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {MovieContext} from '../context/MovieContext';
import styled from 'styled-components';
import {colors} from '../assets/colors/Colors';
import {
  View,
  Image,
  SafeAreaView,
  Linking,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  baseUrl,
  apiKey,
  imageBaseUrl,
  extraData,
  fetchSimilar,
  fetchKidsRandom,
} from '../components/requests';
import Row from '../components/Row';
import CastAndCrew from '../components/CastAndCrew';
import Play from 'react-native-vector-icons/Ionicons';
import Add from 'react-native-vector-icons/MaterialIcons';
import AddComplete from 'react-native-vector-icons/MaterialIcons';
import Download from 'react-native-vector-icons/Feather';
import DownloadComplete from 'react-native-vector-icons/MaterialIcons';
import Share from 'react-native-vector-icons/Ionicons';

const Details = ({route, navigation}) => {
  const {
    handleDownload,
    handleWatchlist,
    isDownloaded,
    isWatchlisted,
    setErrMessage,
    onShare,
  } = useContext(MovieContext);
  const {
    // original_title,
    id,
    genre_ids,
    overview,
    backdrop_path,
    media_type,
    release_date,
    // title,
    vote_average,
    // poster_path,
    title,
    name,
  } = route.params.movie;

  const mediaType = media_type === 'tv' ? 'tv' : 'movie';
  const [movie, setMovie] = useState(route.params.movie);

  const {homepage, original_language, runtime} = movie;

  const [videoKey, setVideoKey] = useState(
    `https://www.youtube.com/results?search_query=${name}`,
  );

  if (!genre_ids.includes(10762)) {
    useEffect(() => {
      const fetchMovie = async () => {
        try {
          const response = await axios.get(
            `${baseUrl}/${mediaType}/${id}?api_key=${apiKey}&language=en-US&${extraData}`,
          );
          setMovie(response.data);
          const youtubeKey = response.data.videos.results.filter(videos => {
            if (videos.type === 'Trailer' && videos.site === 'YouTube') {
              return videos.key;
            }
          });

          if (youtubeKey[0].key.length > 0) {
            setVideoKey(`https://www.youtube.com/watch?v=${youtubeKey[0].key}`);
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchMovie();
    }, []);
  }

  const renderSimilar = () => {
    if (!genre_ids.includes(10762)) {
      return (
        <Row
          title="Similar  "
          fetchUrl={fetchSimilar(baseUrl, id, apiKey, mediaType)}
          navigation={navigation}
        />
      );
    } else {
      return (
        <Row
          title="Similar Shows"
          fetchUrl={fetchKidsRandom(Math.floor(Math.random() * 30))}
          navigation={navigation}
        />
      );
    }
  };

  const renderItem = ({item}) => <CastAndCrew data={item} />;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View>
          <Image
            source={{uri: `${imageBaseUrl}${backdrop_path}`}}
            style={{width: '100%', height: 200}}
          />
        </View>
        <MovieDetailsContainer>
          <TitleText style={{fontFamily: 'Poppins-Bold'}}>
            {title?.length >= 0 ? title : name}
          </TitleText>
          <WatchNowButton onPress={() => Linking.openURL(videoKey)}>
            <WatchNowText>Watch Now </WatchNowText>
          </WatchNowButton>
          <ActionButtonsContainer>
            <TrailerContainer>
              <IconsBorders
                style={{
                  borderRadius: 150 / 2,
                }}
                onPress={() => Linking.openURL(videoKey)}>
                <Play name="play" color={colors.inActiveColor} size={15} />
              </IconsBorders>
              <ActionText> Trailer </ActionText>
            </TrailerContainer>
            {isDownloaded(id) ? (
              <DownloadContainer>
                <IconsBorders
                  style={{
                    borderRadius: 150 / 2,
                  }}
                  onPress={() =>
                    isDownloaded(id)
                      ? setErrMessage('Already Downloaded')
                      : handleDownload(route.params.movie)
                  }>
                  <DownloadComplete
                    name="file-download-done"
                    color={colors.inActiveColor}
                    size={15}
                  />
                </IconsBorders>
                <ActionText> Downloaded </ActionText>
              </DownloadContainer>
            ) : (
              <DownloadContainer>
                <IconsBorders
                  style={{
                    borderRadius: 150 / 2,
                  }}
                  onPress={() =>
                    isDownloaded(id)
                      ? setErrMessage('Already Downloaded')
                      : handleDownload(route.params.movie)
                  }>
                  <Download
                    name="download"
                    color={colors.inActiveColor}
                    size={15}
                  />
                </IconsBorders>
                <ActionText> Download</ActionText>
              </DownloadContainer>
            )}
            {isWatchlisted(id) ? (
              <WatchlistContainer>
                <IconsBorders
                  style={{
                    borderRadius: 150 / 2,
                  }}
                  onPress={() =>
                    isWatchlisted(id)
                      ? setErrMessage('Already Watchlisted')
                      : handleWatchlist(route.params.movie)
                  }>
                  <AddComplete
                    name="playlist-add-check"
                    size={15}
                    color={colors.inActiveColor}
                  />
                </IconsBorders>
                <ActionText> Watchlisted </ActionText>
              </WatchlistContainer>
            ) : (
              <WatchlistContainer>
                <IconsBorders
                  style={{
                    borderRadius: 150 / 2,
                  }}
                  onPress={() =>
                    isWatchlisted(id)
                      ? setErrMessage('Already Watchlisted')
                      : handleWatchlist(route.params.movie)
                  }>
                  <Add
                    name="playlist-add"
                    color={colors.inActiveColor}
                    size={15}
                  />
                </IconsBorders>
                <ActionText> Watchlist</ActionText>
              </WatchlistContainer>
            )}
            <ShareContainer>
              <IconsBorders
                onPress={() => onShare(title?.length >= 0 ? title : name)}
                style={{
                  borderRadius: 150 / 2,
                }}>
                <Share name="share" color={colors.inActiveColor} size={15} />
              </IconsBorders>
              <ActionText> Share </ActionText>
            </ShareContainer>
          </ActionButtonsContainer>
          <Overview>{overview}</Overview>
          <MoreDetailsContainer>
            <MoreDetailsText>
              IMDb - {vote_average ? vote_average : 'NA'}{' '}
            </MoreDetailsText>
            <MoreDetailsText>
              Runtime - {runtime ? runtime : 'NA'}{' '}
            </MoreDetailsText>
            <MoreDetailsText>Language - {original_language} </MoreDetailsText>
            <MoreDetailsText>
              Release Year -{' '}
              {release_date ? release_date.substring(0, 4) : 'NA'}
            </MoreDetailsText>
            {homepage ? (
              <HomePageLink
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: colors.tabBarIcon,
                }}
                onPress={() => Linking.openURL(homepage)}>
                <MoreDetailsText style={{color: colors.tabBarIcon}}>
                  Home Page
                </MoreDetailsText>
              </HomePageLink>
            ) : null}
          </MoreDetailsContainer>
        </MovieDetailsContainer>
        <RelatedContainer>
          <RelatedText
            style={{borderBottomWidth: 2, borderBottomColor: colors.mainText}}>
            Related
          </RelatedText>
          {renderSimilar()}
        </RelatedContainer>
        {movie?.credits?.cast ? (
          <CastAndCrewContainer>
            <CastAndCrewTitle> Cast And Crews </CastAndCrewTitle>
            <FlatList
              data={movie.credits.cast}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </CastAndCrewContainer>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const MovieDetailsContainer = styled.View`
  width: 90%;
  margin: 0px auto;
`;

const TitleText = styled.Text`
  width: 100%;
  color: ${colors.mainText};
  font-size: 26px;
  margin: 10px 0px;
  letter-spacing: 1px;
`;

const WatchNowButton = styled.TouchableOpacity`
  background-color: ${colors.button};
  width: 100%;
  border-radius: 5px;
`;

const WatchNowText = styled.Text`
  color: #000000;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 15px 0px;
  border-radius: 5px;
`;

const ActionButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0px;
`;

const TrailerContainer = styled.View`
  align-items: center;
`;

const DownloadContainer = styled.View`
  align-items: center;
`;

const WatchlistContainer = styled.View`
  align-items: center;
`;

const ShareContainer = styled.View`
  align-items: center;
`;

const IconsBorders = styled.TouchableOpacity`
  border: 1px solid #70838f;
  padding: 14px;
  align-items: center;
`;

const ActionText = styled.Text`
  color: ${colors.border};
  font-size: 14px;
  margin: 5px 0px;
`;

const Overview = styled.Text`
  color: ${colors.mainText};
  letter-spacing: 1px;
`;

const MoreDetailsText = styled.Text`
  color: ${colors.border};
  font-weight: bold;
  letter-spacing: 0.5px;
`;

const MoreDetailsContainer = styled.View`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
`;

const HomePageLink = styled.TouchableOpacity`
  width: 70px;
  padding: 3px 0px;
`;

const RelatedText = styled.Text`
text-align : center;
color : ${colors.mainText}
letter-spacing : 1px;
font-weight : bold;
font-size : 18px
padding : 10px
`;

const RelatedContainer = styled.View`
  margin: 20px 0;
`;

const CastAndCrewTitle = styled.Text`
  font-size: 18px;
  color: ${colors.mainText};
  font-weight: bold;
  margin-left: 15px;
`;

const CastAndCrewContainer = styled.View`
  margin-top: 15px;
`;
