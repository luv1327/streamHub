import React, {useState, useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import axios from 'axios';
import Item from '../components/Item';

const Row = ({title, fetchUrl, navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchUrl);
        if (response.data.parts) {
          setData(response.data.parts);
        } else {
          setData(response.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const renderItem = ({item}) => <Item data={item} navigation={navigation} />;

  return (
    <View>
      <Text>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Row;
