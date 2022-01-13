import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Content from '../screens/Content';
import Details from '../screens/Details';
import {colors} from '../assets/colors/Colors';
const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen name="Content" component={Content} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Home;
