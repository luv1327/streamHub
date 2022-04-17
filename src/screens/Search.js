import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Searching from '../screens/Searching';
import SearchComplete from './SearchComplete';
import ItemWithDetails from '../components/ItemWithDetails';
import Details from '../screens/Details';
import {colors} from '../assets/colors/Colors';
const Stack = createStackNavigator();

const Search = () => {
  return (
    <Stack.Navigator
      initialRouteName="Searching"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen name="Searching" component={Searching} />
      <Stack.Screen name="SearchComplete" component={SearchComplete} />
      <Stack.Screen name="ItemWithDetails" component={ItemWithDetails} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Search;
