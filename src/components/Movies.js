import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import Row from '../components/Row';
import {movieRequest} from '../components/requests';
import ImageSlider from '../components/ImageSlider';

const Movies = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <ImageSlider
          fetchUrl={movieRequest.fetchTrending}
          navigation={navigation}
        />
        {/* Latest Is Not Fetching Data  */}
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
          title="Fast And Furious Series"
          fetchUrl={movieRequest.fetchFastAndFuriousCollection}
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
          fetchUrl={movieRequest.fetchPopular2}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Movies;
