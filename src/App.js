import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import BlogPage from './pages/blog/blog.component';

function App() {
  return (
    <div className="App">
      <Route path='/blog/:blogLink' component={BlogPage} />
    </div>
  );
}

export default App;
