import React from 'react';
import {ScrollView} from 'react-native';
import ImageSlider from '../components/ImageSlider';
import {showRequests} from '../components/requests';
import Row from '../components/Row';
import * as Animatable from 'react-native-animatable';

const Shows = ({navigation}) => {
  return (
    <Animatable.View
      useNativeDriver={true}
      animation="fadeIn"
      duration={3000}
      easing="ease-in">
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
    </Animatable.View>
  );
};

export default Shows;
