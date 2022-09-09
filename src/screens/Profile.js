import React from 'react';
import {View, Text} from 'react-native';

const Profile = ({navigation}) => {
  console.log(navigation.getParam('id'));
  return (
    <View>
      <Text style={{fontSize: 25}}>Profile {navigation.getParam('id')}</Text>
    </View>
  );
};

export default Profile;
