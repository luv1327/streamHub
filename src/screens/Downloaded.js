import React, {useContext} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {MovieContext} from '../context/MovieContext';
import ItemDW from '../components/ItemDW';

const Downloaded = ({navigation}) => {
  const {downloadedVideos} = useContext(MovieContext);
  const renderItem = ({item}) => <ItemDW item={item} navigation={navigation} />;
  return (
    <View>
      <Text> Downloaded Screen </Text>
      <FlatList
        data={downloadedVideos}
        renderItem={renderItem}
        keyExtractor={item => item.movie.id}
      />
      <Button title="Explore" onPress={() => navigation.navigate('Content')} />
    </View>
  );
};

export default Downloaded;
