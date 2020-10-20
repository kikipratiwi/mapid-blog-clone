import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import BlogPage from './pages/blog/blog.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={`/mapid-blog-clone/blog/:blogLink`} children={<BlogPage />} />
        <Route path={`/mapid-blog-clone/blog`} children={<BlogPage />} />
        <Route 
          exact
          path='/' 
          render={() => {
            return (
              <Redirect to={`/mapid-blog-clone/blog`} />
            )
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
