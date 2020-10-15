import React from 'react';
import './App.css';

import SideBar from './components/sidebar/sidebar.component';
import HeroTitle from './components/hero-title/hero-title.component';
import BlogPage from './pages/blog/blog.component';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <HeroTitle/>
      <BlogPage/>
    </div>
  );
}

export default App;
