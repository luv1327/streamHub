import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import axios from 'axios';
import Item from '../components/Item';
import styled from 'styled-components';
import {colors} from '../assets/colors/Colors';

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
    <RowContainer>
      <RowTitle>{title}</RowTitle>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </RowContainer>
  );
};

export default Row;

const RowContainer = styled.View`
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const RowTitle = styled.Text`
  font-size: 18px;
  color: ${colors.mainText};
  font-weight: bold;
  padding: 6px;
`;
