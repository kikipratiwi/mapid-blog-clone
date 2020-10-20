import { createSelector } from 'reselect';

const selectBlog = state => state.blog;

export const selectCurrentBlog = createSelector(
  [selectBlog],
  blog => blog.currentBlog
);

export const selectDefaultBlog = createSelector(
  [selectBlog],
  blog => blog.defaultBlog
);

export const selectBlogData = createSelector(
  [selectBlog],
  blog => blog.blogData
);
