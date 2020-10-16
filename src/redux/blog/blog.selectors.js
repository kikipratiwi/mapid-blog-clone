import { createSelector } from 'reselect';

const selectBlog = state => state.blog;

export const selectCurrentBlog = createSelector(
  [selectBlog],
  blog => blog.currentBlog
);
