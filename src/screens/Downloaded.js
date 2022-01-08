import React from 'react';
import {View, Text, Button} from 'react-native';

const Downloaded = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> Downloaded Screen </Text>
      <Button title="Explore" onPress={() => navigation.navigate('Content')} />
    </View>
  );
};

export default Downloaded;
