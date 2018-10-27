import React, { Component } from 'react';

import Header from 'components/Header';
import PostsContainer from 'components/PostsContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PostsContainer />
      </div>
    );
  }
}

export default App;
