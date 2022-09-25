import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({route, navigation}) => {
  const {state} = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === route.params.id);
  return (
    <View>
      <Text>
        {blogPost.title} , {blogPost.id}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
