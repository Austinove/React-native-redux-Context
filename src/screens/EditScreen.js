import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {Context} from '../context/BlogContext';

const EditScreen = ({route, navigation}) => {
  const {state} = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === route.params.id);
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);
  const {editBlogPost} = useContext(Context);
  return (
    <View style={styles.view}>
      <Text style={styles.label}>Edit Title: </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Edit Content: </Text>
      <TextInput
        style={styles.input1}
        value={content}
        onChangeText={content => setContent(content)}
      />
      <Button
        onPress={() => {
          editBlogPost(title, content, () => {
            navigation.navigate('Home');
          });
          // navigation.navigate('Home');
        }}
        title="Save Blog Post"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray',
    height: 40,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  input1: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray',
    height: 40,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    marginHorizontal: 10,
    fontSize: 20,
    marginBottom: 5,
    marginTop: 5,
  },
  view: {
    marginVertical: 10,
  },
});

export default EditScreen;
