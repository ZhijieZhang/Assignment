import React from 'react';

import './Post.css'

class Post extends React.PureComponent {
  state = {
    showComments: false    
  };
  comments = [];

  handleClick = () => {
    if (!this.comments.length) {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.id}`)
        .then((response) => response.json())
        .then((comments) => {
          this.comments = comments;
          this.togglePost();
        });
    } else {
      this.togglePost();
    }
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

  render() {
    const { title, body, index } = this.props;

    return(
      <div 
        className={this.getClassName('post', index)} 
        onClick={this.handleClick}
      >
        <div className="post__title">{`title: ${title}`}</div>
        <div className="post__body">{`body: ${body}`}</div>

        {this.state.showComments &&
          this.comments.map(({ id, name, email, body }, index) => (
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
        }
      </div>
    );
  }
}

export default Post