import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  Linking,
  Button,
  FlatList,
  Text,
} from 'react-native';
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
import CastAndCrew from '../components/CastAndCrew';

const Details = ({route, navigation}) => {
  const mediaType = route.params.movie.media_type === 'tv' ? 'tv' : 'movie';
  const [movie, setMovie] = useState(route.params.movie);
  const [videoKey, setVideoKey] = useState(
    `https://www.youtube.com/results?search_query=${route.params.movie.name}`,
  );
  const [credits, setCredits] = useState([]);

  if (!route.params.movie.genre_ids.includes(10762)) {
    useEffect(() => {
      const fetchMovie = async () => {
        try {
          const response = await axios.get(
            `${baseUrl}/${mediaType}/${route.params.movie.id}?api_key=${apiKey}&language=en-US&${extraData}`,
          );
          setMovie(response.data);
          setCredits(response.data.credits);
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

  const renderItem = ({item}) => <CastAndCrew data={item} />;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Image
          source={{uri: `${imageBaseUrl}${movie.backdrop_path}`}}
          style={{width: 350, height: 200}}
        />
        <Text> {videoKey} </Text>
        {renderSimilar()}
      </View>
      <Button title="Go" onPress={() => Linking.openURL(videoKey)} />
      <FlatList
        data={credits.cast}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Details;
