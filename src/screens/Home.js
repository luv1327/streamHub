import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Content from '../screens/Content';
import Details from '../screens/Details';
import {colors} from '../assets/colors/Colors';
const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
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
