import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Downloaded from '../screens/Downloaded';
import Content from '../screens/Content';
import {colors} from '../assets/colors/Colors';

const Stack = createStackNavigator();

const Downloads = () => {
  return (
    <Stack.Navigator
      initialRouteName={Downloaded}
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen name="Downloaded" component={Downloaded} />
      <Stack.Screen name="Content" component={Content} />
    </Stack.Navigator>
  );
};

export default Downloads;
