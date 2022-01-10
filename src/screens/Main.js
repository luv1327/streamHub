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
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Downloads" component={Downloads} />
        <Tab.Screen name="Me" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <Auth />
  );
}

export default Main;
