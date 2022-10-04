import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({route, navigation}) => {
  const {state} = useContext(Context);
  const blogPost = state.find(post => post.id === route.params.id);
  return (
    <View style={{padding: 20}}>
      <Text style={{fontWeight: 'bold', marginVertical: 10}}>
        {blogPost.title}
      </Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;
