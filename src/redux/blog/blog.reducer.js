import BlogActionTypes from './blog.types';
import { setCurrentBlog } from './blog.utils';

const INITIAL_STATE = {
  blogData: null,
  defaultBlog: null,
  currentBlog: null
};

const blogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BlogActionTypes.SET_CURRENT_BLOG:
      return {
        ...state,
        currentBlog: setCurrentBlog(state.currentBlog, action.payload)
      }

    case BlogActionTypes.SET_BLOG_DATA:
      return {
        ...state,
        blogData: action.payload
      }

    case BlogActionTypes.SET_DEFAULT_BLOG:
      return {
        ...state,
        defaultBlog: action.payload
      }
    default:
      return state;
  }
};

export default blogReducer;
