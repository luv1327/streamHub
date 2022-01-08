import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import axios from 'axios';
import {
  baseUrl,
  apiKey,
  imageBaseUrl,
  extraData,
  fetchSimilar,
  fetchKidsRandom,
} from '../components/requests';
import Row from '../components/Row';

const Details = ({route, navigation}) => {
  const mediaType = route.params.movie.media_type === 'tv' ? 'tv' : 'movie';
  const [movie, setMovie] = useState(route.params.movie);
  const [videoKey, setVideoKey] = useState('');

  if (!route.params.movie.genre_ids.includes(10762)) {
    useEffect(() => {
      const fetchMovie = async () => {
        try {
          const response = await axios.get(
            `${baseUrl}/${mediaType}/${route.params.movie.id}?api_key=${apiKey}&language=en-US&${extraData}`,
          );
          setMovie(response.data);
          const youtubeKey = response.data.videos.results.filter(videos => {
            if (videos.type === 'Trailer' && videos.site === 'YouTube') {
              return videos.key;
            }
          });
          setVideoKey(youtubeKey[0].key);
        } catch (error) {
          console.log(error);
        }
      };
      fetchMovie();
    }, []);
  }

  const renderSimilar = () => {
    if (!route.params.movie.genre_ids.includes(10762)) {
      return (
        <Row
          title="Similar"
          fetchUrl={fetchSimilar(
            baseUrl,
            route.params.movie.id,
            apiKey,
            mediaType,
          )}
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

  return (
    <ScrollView style={{flex: 1}}>
      <SafeAreaView>
        <View>
          <Image
            source={{uri: `${imageBaseUrl}${movie.backdrop_path}`}}
            style={{width: 350, height: 200}}
          />
          <Text> {JSON.stringify(videoKey)} </Text>
          {renderSimilar()}
          <Text> Details Screen </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Details;
