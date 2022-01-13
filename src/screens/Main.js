import React, {useState, useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Home from '../screens/Home';
import Search from './Search';
import Downloads from '../screens/Downloads';
import Account from '../screens/Account';
import Auth from '../screens/Auth';
import {AuthContext} from '../context/AuthContext';
import {colors} from '../assets/colors/Colors';
import HomeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchIcon from 'react-native-vector-icons/Feather';
import DownloadIcon from 'react-native-vector-icons/Feather';
import UserIcon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

function Main() {
  const [initializing, setInitializing] = useState(true);
  const {user, setUser, setFireStoreUser} = useContext(AuthContext);
  // Handle user state changes
  async function onAuthStateChanged(user) {
    try {
      setUser(user);
      if (user) {
        firestore()
          .collection('Users')
          .doc(user.email)
          .get()
          .then(documentSnapshot => {
            if (documentSnapshot.exists) {
              setFireStoreUser(documentSnapshot.data());
            }
          })
          .catch(err => console.log(err));
      }
      if (initializing) setInitializing(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return user ? (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.tabBarIcon,
          tabBarInactiveTintColor: colors.inActiveColor,
          tabBarStyle: {
            backgroundColor: colors.tabBar,
            borderTopWidth: 1,
            borderTopColor: colors.tabBar,
            height: 60,
            paddingBottom: 6,
            paddingTop: 3,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <HomeIcon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color, size}) => (
              <SearchIcon name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Downloads"
          component={Downloads}
          options={{
            tabBarLabel: 'Downloads',
            tabBarIcon: ({color, size}) => (
              <DownloadIcon name="download" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Me"
          component={Account}
          options={{
            tabBarLabel: 'Me',
            tabBarIcon: ({color, size}) => (
              <UserIcon name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <Auth />
  );
}

export default Main;
