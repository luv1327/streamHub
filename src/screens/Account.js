import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import User from '../screens/User';
import Content from '../screens/Content';
import {colors} from '../assets/colors/Colors';

const Stack = createStackNavigator();

const Account = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Content" component={Content} />
    </Stack.Navigator>
  );
};

export default Account;
