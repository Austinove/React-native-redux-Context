import React, {useContext} from 'react';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({route, navigation}) => {
  const {state} = useContext(Context);
  const blogPost = state.find(post => post.id === route.params.id);
  const {editBlogPost} = useContext(Context);
  const onSubmit = (title, content) => {
    editBlogPost(blogPost.id, title, content, () =>
      navigation.navigate('Home'),
    );
  };
  return (
    <BlogPostForm
      initialValues={{
        title: blogPost.title,
        content: blogPost.content,
      }}
      submitCallback={onSubmit}
    />
  );
};

export default EditScreen;
