import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import BlogPage from './pages/blog/blog.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={BlogPage} />
      </Switch>
    </div>
  );
}

export default App;
