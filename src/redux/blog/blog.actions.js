import BlogActionTypes from './blog.types';

export const setCurrentBlog = blog => ({
  type: BlogActionTypes.SET_CURRENT_BLOG,
  payload: blog
});

export const setBlogData = blog => ({
  type: BlogActionTypes.SET_BLOG_DATA,
  payload: blog
});

export const setDefaultBlog = blog => ({
  type: BlogActionTypes.SET_DEFAULT_BLOG,
  payload: blog
});
