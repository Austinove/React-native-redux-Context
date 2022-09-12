import React, {useCallback, useContext} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {Context} from '../context/BlogContext';
//for many context files imports you use a reference e.g
//import { Context as BlogContext } from '../context/BlogContext';

const Home = ({navigation}) => {
  const {state, addBlogPost} = useContext(Context);
  return (
    <View>
      <Text style={{fontSize: 25}}>Testing App</Text>
      <Button onPress={addBlogPost()} title="Add Blog" />
      <FlatList
        data={state}
        keyExtractor={state => state.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>;
        }}
      />
      <Button
        onPress={() => navigation.navigate('Profile', {id: 'none'})}
        title="Route"
      />
    </View>
  );
};

export default Home;
