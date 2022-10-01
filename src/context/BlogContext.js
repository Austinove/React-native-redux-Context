import createDataContex from './createDataContex';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case 'edit_blogpost':
      return [...state];

    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({type: 'add_blogpost', payload: {title, content}});
    callback();
  };
};
const deleteBlogPost = dispatch => {
  return id => {
    dispatch({type: 'delete_blogpost', payload: id});
  };
};
const editBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({type: 'edit_blogpost', payload: {title, content}});
    callback();
  };
};
export const {Context, Provider} = createDataContex(
  blogReducer,
  {addBlogPost, editBlogPost, deleteBlogPost},
  [{title: 'TEST POST', content: 'TEST CONTENT', id: 1}],
);
