import React, {useState} from 'react';
import {View, Text, Button, TextInput, FlatList} from 'react-native';
import {movieGenreData} from '../components/requests';
import Genre from '../components/Genre';

const Searching = ({navigation}) => {
  const [searchedTerm, setSearchedTerm] = useState('');
  const renderItem = ({item}) => <Genre data={item} navigation={navigation} />;
  return (
    <View>
      <Text> Searching Screen </Text>
      <TextInput
        placeholder="Search By Name"
        onChangeText={text => setSearchedTerm(text)}
      />
      <Button
        title="Search"
        onPress={() => navigation.navigate('SearchComplete', {searchedTerm})}
      />
      <FlatList
        data={movieGenreData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Searching;
