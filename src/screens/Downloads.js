import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Downloaded from '../screens/Downloaded';
import Content from '../screens/Content';

const Stack = createStackNavigator();

const Downloads = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Downloaded" component={Downloaded} />
      <Stack.Screen name="Content" component={Content} />
    </Stack.Navigator>
  );
};

export default Downloads;
