import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import Row from '../components/Row';
import {movieRequest} from '../components/requests';
import ImageSlider from '../components/ImageSlider';

const Movies = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageSlider
          fetchUrl={movieRequest.fetchTrending}
          navigation={navigation}
        />
        <Row
          title="Upcoming"
          fetchUrl={movieRequest.fetchUpcoming}
          navigation={navigation}
        />
        <Row
          title="Now Playing"
          fetchUrl={movieRequest.fetchNowPlaying}
          navigation={navigation}
        />
        <Row
          title="Top Rated"
          fetchUrl={movieRequest.fetchTopRated}
          navigation={navigation}
        />
        <Row
          title="Popular"
          fetchUrl={movieRequest.fetchPopular}
          navigation={navigation}
        />
        <Row
          title="Latest"
          fetchUrl={movieRequest.fetchUpcoming2}
          navigation={navigation}
        />
        <Row
          title="Most Loved"
          fetchUrl={movieRequest.fetchPopular3}
          navigation={navigation}
        />
        <Row
          title="Most Watched"
          fetchUrl={movieRequest.fetchNowPlaying2}
          navigation={navigation}
        />
        <Row
          title="Most Awaited Movies"
          fetchUrl={movieRequest.fetchNowPlaying3}
          navigation={navigation}
        />
        <Row
          title="Originals"
          fetchUrl={movieRequest.fetchPopular2}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Movies;
