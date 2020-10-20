import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import BlogPage from './pages/blog/blog.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route 
          exact
          path='/' 
          render={() => {
            return (
              <Redirect to="/blog" />
            )
          }}
        />
        <Route path='/blog' component={BlogPage} />
        <Route exact path='/blog/:blogLink' children={BlogPage} />
      </Switch>
    </div>
  );
}

export default App;
