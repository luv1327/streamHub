import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {MovieContext} from '../context/MovieContext';
import ItemDW from '../components/ItemDW';
import styled from 'styled-components';
import {colors} from '../assets/colors/Colors';
import LogoutIcon from 'react-native-vector-icons/AntDesign';
import NotWatchlisted from '../components/NotWatchlisted';

const User = ({navigation}) => {
  const {logout, fireStoreUser} = useContext(AuthContext);
  const {watchlistedVideos} = useContext(MovieContext);

  const renderItem = ({item}) => <ItemDW item={item} navigation={navigation} />;

  return (
    <WatchlistedContainer>
      <UserInfoContainer>
        <AvatarAndImageContainer>
          <Avatar source={require('../assets/images/monster.png')} />
          <Username> {fireStoreUser.username} </Username>
        </AvatarAndImageContainer>
        <LogoutIcon
          name="logout"
          color={colors.inActiveColor}
          size={30}
          onPress={logout}
        />
      </UserInfoContainer>
      {watchlistedVideos.length > 0 ? (
        <View>
          <Title
            style={{borderBottomWidth: 1, borderBottomColor: colors.mainText}}>
            Watchlist
          </Title>
          <WatchlistedContent>
            <View>
              <FlatList
                data={watchlistedVideos.reverse()}
                renderItem={renderItem}
                keyExtractor={item => item.movie.id}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </WatchlistedContent>
        </View>
      ) : (
        <NotWatchlisted navigation={navigation} />
      )}
    </WatchlistedContainer>
  );
};

export default User;

const WatchlistedContainer = styled.View`
  widht: 100%;
  height: 100%;
`;

const WatchlistedContent = styled.View`
  width: 100%;
  margin: 0 auto 162px auto;
  padding: 10px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: ${colors.mainText};
  width: 100%;
  padding-bottom: 20px;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const UserInfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: 30px auto 0 auto;
  align-items: center;
`;

const AvatarAndImageContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100px;
  justify-content: space-between;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;

const Username = styled.Text`
  color: ${colors.mainText};
  font-size: 16px;
  font-weight: bold;
`;
