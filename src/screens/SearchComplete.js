import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import {
  fetchByNameMovie,
  fetchByNameTv,
  apiKey,
  baseUrl,
  fetchByGenreMovies,
  fetchByGenreShows,
} from '../components/requests';
import ItemWithDetails from '../components/ItemWithDetails';

const SearchComplete = ({navigation, route}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (route.params.searchedTerm !== undefined) {
          const responseMovie = await axios.get(
            fetchByNameMovie(baseUrl, apiKey, route.params.searchedTerm),
          );
          const responseShow = await axios.get(
            fetchByNameTv(baseUrl, apiKey, route.params.searchedTerm),
          );
          const movieAndTv = [
            ...responseMovie.data.results,
            ...responseShow.data.results,
          ];
          setData(movieAndTv);
        } else {
          const responseGenreShow = await axios.get(
            fetchByGenreShows(
              baseUrl,
              apiKey,
              route.params.data.showId ? route.params.data.showId : '',
            ),
          );
          const responseGenreMovies = await axios.get(
            fetchByGenreMovies(
              baseUrl,
              apiKey,
              route.params.data.movieId ? route.params.data.movieId : '',
            ),
          );

          const movieAndTvGenre = [
            ...responseGenreMovies.data.results,
            ...responseGenreShow.data.results,
          ];
          setData(movieAndTvGenre);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <ItemWithDetails data={item} navigation={navigation} />
  );

  return (
    <View>
      <Text>SearchComplete</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        horizontal={false}
      />
    </View>
  );
};

export default SearchComplete;
