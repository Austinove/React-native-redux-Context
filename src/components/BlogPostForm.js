import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({submitCallback, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
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
        style={styles.input1}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button
        onPress={() => {
          submitCallback(title, content);
        }}
        title="Save Blog Post"
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
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

export default BlogPostForm;
