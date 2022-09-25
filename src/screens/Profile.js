import React from 'react';
import {View, Text} from 'react-native';

const Profile = ({route}) => {
  return (
    <View>
      <Text style={{fontSize: 25}}>Profile {route.params.id}</Text>
    </View>
  );
};

export default Profile;
