import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ImageSlider from '../components/ImageSlider';
import {showRequests} from '../components/requests';
import Row from '../components/Row';

const Kids = ({navigation}) => {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

export default Kids;
