import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Movies from '../components/Movies';
import Shows from '../components/Shows';
import Kids from '../components/Kids';
import {colors} from '../assets/colors/Colors';
import styled from 'styled-components';

const Content = ({navigation}) => {
  const [selected, setSelected] = useState('Movies');
  const borderStyle = {
    borderBottomWidth: 4,
    borderBottomColor: colors.mainText,
  };
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
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <StatusBar backgroundColor={colors.background} />
      <ScrollView>
        <HeaderContainer>
          <LogoContainer>
            <StreamText>Stream</StreamText>
            <HubText>Hub</HubText>
          </LogoContainer>
          <SelectionContainer>
            <TextContainer
              style={selected === 'Movies' ? borderStyle : {}}
              onPress={() => setSelected('Movies')}>
              <HeaderText> Movies </HeaderText>
            </TextContainer>
            <TextContainer
              style={selected === 'Shows' ? borderStyle : {}}
              onPress={() => setSelected('Shows')}>
              <HeaderText> Tv Shows </HeaderText>
            </TextContainer>
            <TextContainer
              style={selected === 'Kids' ? borderStyle : {}}
              onPress={() => setSelected('Kids')}>
              <HeaderText> Kids </HeaderText>
            </TextContainer>
          </SelectionContainer>
        </HeaderContainer>
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Content;

const HeaderText = styled.Text`
  color: ${colors.mainText};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

const LogoContainer = styled.Text`
  margin: 15px auto;
  color: ${colors.mainText};
`;

const StreamText = styled.Text`
  font-size: 26px;
  font-family: 'Poppins-Bold';
  color: ${colors.tabBarIcon};
`;

const HubText = styled.Text`
  font-size: 26px;
  font-family: 'Poppins-Bold';
  color: #fff;
`;

const HeaderContainer = styled.View`
  height: 105px;
`;

const SelectionContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 13px;
`;

const TextContainer = styled.Pressable`
  padding-bottom: 12px;
  width: 80px;
  text-align: center;
`;
