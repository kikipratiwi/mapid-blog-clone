import BlogActionTypes from './blog.types';

export const setCurrentBlog = blog => ({
  type: BlogActionTypes.SET_CURRENT_BLOG,
  payload: blog
});
