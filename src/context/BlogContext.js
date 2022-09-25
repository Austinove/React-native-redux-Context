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
          title: `Blog Post #${state.length + 1}`,
        },
      ];

    case 'edit_blogpost':
      return state;

    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return () => {
    dispatch({type: 'add_blogpost'});
  };
};
const deleteBlogPost = dispatch => {
  return id => {
    dispatch({type: 'delete_blogpost', payload: id});
  };
};
const editBlogPost = dispatch => {
  return () => {
    dispatch({type: 'edit_blogpost'});
  };
};
export const {Context, Provider} = createDataContex(
  blogReducer,
  {addBlogPost, editBlogPost, deleteBlogPost},
  [],
);
