import React from 'react';
import {ScrollView} from 'react-native';
import ImageSlider from '../components/ImageSlider';
import {showRequests} from '../components/requests';
import Row from '../components/Row';
import * as Animatable from 'react-native-animatable';

const Kids = ({navigation}) => {
  return (
    <Animatable.View
      useNativeDriver={true}
      animation="fadeIn"
      duration={3000}
      easing="ease-in">
      <ScrollView>
        <ImageSlider
          fetchUrl={showRequests.fetchKids3}
          navigation={navigation}
        />
        <Row
          title="Latest"
          fetchUrl={showRequests.fetchKids2}
          navigation={navigation}
        />
        <Row
          title="Kids Favourites"
          fetchUrl={showRequests.fetchKids3}
          navigation={navigation}
        />
        <Row
          title="Kids TV"
          fetchUrl={showRequests.fetchKids4}
          navigation={navigation}
        />
        <Row
          title="Kids Movies"
          fetchUrl={showRequests.fetchKids5}
          navigation={navigation}
        />
      </ScrollView>
    </Animatable.View>
  );
};

export default Kids;
