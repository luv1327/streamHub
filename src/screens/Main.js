import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from './Search';
import Downloads from '../screens/Downloads';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Downloads" component={Downloads} />
        <Tab.Screen name="Me" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Main;
