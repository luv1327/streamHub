import React, {useContext} from 'react';
import {View, Text, Button, TouchableOpacity, FlatList} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {MovieContext} from '../context/MovieContext';
import ItemDW from '../components/ItemDW';

const User = ({navigation}) => {
  const {logout, fireStoreUser} = useContext(AuthContext);
  const {watchlistedVideos} = useContext(MovieContext);

  const renderItem = ({item}) => <ItemDW item={item} navigation={navigation} />;

  return (
    <View>
      <Text> User Screen </Text>
      <Text> {fireStoreUser.email} </Text>
      <FlatList
        data={watchlistedVideos}
        renderItem={renderItem}
        keyExtractor={item => item.movie.id}
      />
      <Button title="Explore" onPress={() => navigation.navigate('Content')} />
      <TouchableOpacity onPress={logout}>
        <Text> Logout </Text>
      </TouchableOpacity>
    </View>
  );
};

export default User;
