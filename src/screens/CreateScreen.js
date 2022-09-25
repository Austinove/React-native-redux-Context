import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

const CreateScreen = ({route, navigation}) => {
  //   const {state} = useContext(Context);
  //   const blogPost = state.find(blogPost => blogPost.id === route.params.id);
  return (
    <View>
      <Text>Create Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
