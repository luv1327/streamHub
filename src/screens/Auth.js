import React from 'react';
import {View, Text, Button} from 'react-native';

function Auth({handleChange}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> Auth Screen </Text>
      <Button onPress={handleChange} title="Login" />
    </View>
  );
}

export default Auth;
