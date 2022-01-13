import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ImageSlider from '../components/ImageSlider';
import {showRequests} from '../components/requests';
import Row from '../components/Row';

const Shows = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageSlider
          fetchUrl={showRequests.fetchTrending}
          navigation={navigation}
        />
        <Row
          title="Trending"
          fetchUrl={showRequests.fetchTrending}
          navigation={navigation}
        />
        <Row
          title="Airing Today"
          fetchUrl={showRequests.fetchAiringToday}
          navigation={navigation}
        />
        <Row
          title="On The Air"
          fetchUrl={showRequests.fetchOnTheAir}
          navigation={navigation}
        />
        <Row
          title="Top Rated"
          fetchUrl={showRequests.fetchTopRated}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shows;
