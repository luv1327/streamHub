import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import User from '../screens/User';
import Content from '../screens/Content';

const Stack = createStackNavigator();

const Account = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Content" component={Content} />
    </Stack.Navigator>
  );
};

export default Account;
