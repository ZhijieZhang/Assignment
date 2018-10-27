import React from 'react';

import Post from 'components/Post';

import './PostsContainer.css'

class PostsContainer extends React.Component {
  state = {
    numberOfPostsToRender: 0
  };
  posts = [];

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => {
        this.posts = posts;
        this.setState({ numberOfPostsToRender: 10 });
      });
  }

  loadMorePosts = () => {
    this.setState((prevState) => ({
      numberOfPostsToRender: prevState.numberOfPostsToRender + 10
    }));
  }

  render() {
    const { numberOfPostsToRender } = this.state;
    
    return ( 
      <div className="posts-container">
        {this.posts.slice(0, numberOfPostsToRender).map((post, index) => (
          <Post key={post.id} index={index} {...post} />
        ))}
        
        {numberOfPostsToRender <= this.posts.length &&
          <div className="posts-container__button" onClick={this.loadMorePosts}>
            View More
          </div>
        }
      </div>
    );
  }
}

export default PostsContainer;