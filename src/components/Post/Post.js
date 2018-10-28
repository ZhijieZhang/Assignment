import React from 'react';

import './Post.css'

class Post extends React.PureComponent {
  state = {
    showComments: false,
    comments: []
  };

  handleClick = () => {
    if (!this.state.comments.length) {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.id}`)
        .then((response) => response.json())
        .then((comments) => {
          this.setState({comments});
        });
    }
    this.togglePost();
  }

  togglePost = () => {
    this.setState((prevState) => ({
      showComments: !prevState.showComments
    }));
  }

  getClassName = (name, index) => {
    return [
      name,
      index % 2 === 0 ? 'even' : 'odd'
    ].join(' ');
  }

  renderComments = () => {
    const { comments, showComments } = this.state;

    if (!showComments) {
      return null;
    }

    const isFetchingComments = !comments.length; 
    if (isFetchingComments) {
      return <div className="post__comment--loading">Loading...</div>
    }

    return (
      comments.map(({ id, name, email, body }, index) => (
        <div 
          className={this.getClassName('post__comment', index)} 
          key={id}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="comment__name">Name: {name}</div>
          <div className="comment__email">Email: {email}</div>
          <div className="comment__body">Body: {body}</div>
        </div>
      ))
    );
  }

  render() {
    const { title, body, index } = this.props;

    return(
      <div 
        className={this.getClassName('post', index)} 
        onClick={this.handleClick}
      >
        <div className="post__title">{`title: ${title}`}</div>
        <div className="post__body">{`body: ${body}`}</div>

        {this.renderComments()}
      </div>
    );
  }
}

export default Post