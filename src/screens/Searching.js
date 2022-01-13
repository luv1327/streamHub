import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {movieGenreData} from '../components/requests';
import Genre from '../components/Genre';
import styled from 'styled-components';
import {colors} from '../assets/colors/Colors';
import SearchIcon from 'react-native-vector-icons/Ionicons';

const Searching = ({navigation}) => {
  const [searchedTerm, setSearchedTerm] = useState('');
  const renderItem = ({item}) => <Genre data={item} navigation={navigation} />;
  return (
    <SearchingContainer>
      <Content>
        <SearchInputContainer>
          <SearchIcon
            name="search"
            color="white"
            size={25}
            style={{padding: 10}}
            onPress={() =>
              navigation.navigate('SearchComplete', {searchedTerm})
            }
          />
          <SearchInput
            placeholder="Search By Name,Show..."
            onChangeText={text => setSearchedTerm(text)}
            underlineColorAndroid="transparent"
            placeholderTextColor={colors.inActiveColor}
            maxLength={30}
            returnKeyType="search"
            onEndEditing={() =>
              navigation.navigate('SearchComplete', {searchedTerm})
            }
          />
        </SearchInputContainer>
        <BrowseText>Browse By Genres</BrowseText>
        <FlatList
          data={movieGenreData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </SearchingContainer>
  );
};

export default Searching;

const Content = styled.View`
  width: 90%;
  margin: 10px auto 200px auto;
`;

const SearchingContainer = styled.View`
  height: 100%;
  width: 100%;
`;

const BrowseText = styled.Text`
  font-size: 18px;
  color: ${colors.mainText};
  font-weight: bold;
  margin: 50px 0px 20px 0px;
`;

const SearchInputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 50px 0px 0px 0px;
  height: 60px;
  border-radius: 5px;
  background-color: #1a3449;
`;

const SearchInput = styled.TextInput`
  padding: 10px 0px 10px 0;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  color: ${colors.inActiveColor};
`;
