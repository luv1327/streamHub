import React, {useState, useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {colors} from '../assets/colors/Colors';
import styled from 'styled-components';
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
          await setData(movieAndTv);
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
    <MainContainer>
      {data.length > 0 ? (
        <SecondaryContainer>
          <SearchResult>
            {route.params.searchedTerm !== undefined
              ? route.params.searchedTerm
              : route.params.data.title}
          </SearchResult>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={3}
            horizontal={false}
            showsVerticalScrollIndicator={false}
          />
        </SecondaryContainer>
      ) : (
        <>
          <Text
            style={{
              fontSize: 22,
              color: colors.mainText,
              textAlign: 'center',
              marginTop: 40,
              fontFamily: 'Poppins-Bold',
            }}>
            Sorry No Results Found!
          </Text>
        </>
      )}
    </MainContainer>
  );
};

export default SearchComplete;

const MainContainer = styled.View`
  background-color: ${colors.background};
  margin-bottom: 50px;
`;

const SecondaryContainer = styled.View`
  width: 90%;
  margin: 20px auto;
`;

const SearchResult = styled.Text`
  font-size: 22px;
  color: ${colors.mainText};
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;
