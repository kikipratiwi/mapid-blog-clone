export const setCurrentBlog = (prevCurrentBlog, newCurrentBlog) => {
  document.title = newCurrentBlog.title;
  return newCurrentBlog;
 };
 