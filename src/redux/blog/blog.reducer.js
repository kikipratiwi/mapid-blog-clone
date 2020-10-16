import BlogActionTypes from './blog.types';
import { setCurrentBlog } from './blog.utils';

const INITIAL_STATE = {
  currentBlog: null
};

const blogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BlogActionTypes.SET_CURRENT_BLOG:
      return {
        ...state,
        currentBlog: setCurrentBlog(state.currentBlog, action.payload)
      }
    default:
      return state;
  }
};

export default blogReducer;
