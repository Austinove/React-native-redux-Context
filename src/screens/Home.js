import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text style={{fontSize: 25}}>Testing App</Text>
      <Button
        onPress={() => navigation.navigate('Profile', {id: 'none'})}
        title="Route"
      />
    </View>
  );
};

export default Home;
