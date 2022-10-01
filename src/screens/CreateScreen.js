import React, {useContext} from 'react';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({route, navigation}) => {
  const {addBlogPost} = useContext(Context);
  const onSubmit = (title, content) => {
    addBlogPost(title, content, () => navigation.navigate('Home'));
  };
  return <BlogPostForm submitCallback={onSubmit} />;
};

export default CreateScreen;
