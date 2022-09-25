import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Context} from '../context/BlogContext';

const CreateScreen = ({route, navigation}) => {
  //   const {state} = useContext(Context);
  //   const blogPost = state.find(blogPost => blogPost.id === route.params.id);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <View style={styles.view}>
      <Text style={styles.label}>Enter Title: </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content: </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={content => setContent(content)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  label: {
    marginHorizontal: 10,
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  view: {
    marginVertical: 10,
  },
});

export default CreateScreen;
