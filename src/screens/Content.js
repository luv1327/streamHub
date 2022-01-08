import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import Movies from '../components/Movies';
import Shows from '../components/Shows';
import Kids from '../components/Kids';

const Content = ({navigation}) => {
  const [selected, setSelected] = useState('Movies');
  const renderContent = () => {
    if (selected === 'Movies') {
      return <Movies navigation={navigation} />;
    } else if (selected === 'Shows') {
      return <Shows navigation={navigation} />;
    } else {
      return <Kids navigation={navigation} />;
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="red" />
      <ScrollView>
        <View>
          <Text> Logo </Text>
          <Pressable onPress={() => setSelected('Movies')}>
            <Text> Movies </Text>
          </Pressable>
          <Pressable onPress={() => setSelected('Shows')}>
            <Text> Shows </Text>
          </Pressable>
          <Pressable onPress={() => setSelected('Kids')}>
            <Text> Kids </Text>
          </Pressable>
        </View>
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Content;
