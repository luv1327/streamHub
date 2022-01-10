import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {MovieContext} from '../context/MovieContext';
import {
  View,
  Image,
  SafeAreaView,
  Linking,
  FlatList,
  Text,
  TouchableOpacity,
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

const Details = ({route, navigation}) => {
  const {
    handleDownload,
    handleWatchlist,
    isDownloaded,
    isWatchlisted,
    setErrMessage,
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
          console.log(response.data);
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
          title="Similar"
          fetchUrl={fetchSimilar(baseUrl, id, apiKey, mediaType)}
          navigation={navigation}
        />
      );
    } else {
      return (
        <Row
          title="Similar"
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
        <Text> {title?.length >= 0 ? title : name} </Text>
        <Text> Watch </Text>
        <TouchableOpacity onPress={() => Linking.openURL(videoKey)}>
          <Text> Trailer </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            isDownloaded(id)
              ? setErrMessage('Already Downloaded')
              : handleDownload(route.params.movie)
          }>
          <Text> {isDownloaded(id) ? 'Downloaded' : 'Download'} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            isWatchlisted(id)
              ? setErrMessage('Already Watchlisted')
              : handleWatchlist(route.params.movie)
          }>
          <Text>
            {' '}
            {isWatchlisted(id) ? 'Watchlisted' : 'Add To Watchlist'}{' '}
          </Text>
        </TouchableOpacity>
        <Text> {overview} </Text>
        <Text> IMDb {vote_average} </Text>
        <Text> Runtime {runtime} </Text>
        <Text> {original_language} </Text>
        <Text> {release_date} </Text>
        <Text> HomePage - {homepage} </Text>
        <Text> Related </Text>
        {renderSimilar()}
        <FlatList
          data={movie?.credits?.cast}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
