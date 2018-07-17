import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../../person-flat.png';

const Comment = (props) => {

  const {
    userId,
    comment
  } = props

  return (
    <div className="comment" style={{margin: 'auto 0'}} >
      <a className="avatar">
        <img src={avatar} alt="avatar" />
      </a>
      <div className="content">
        <a className="author"> { userId } </a> 
        <div className="metadata">
          <span className="date"></span>
        </div>
        <div className="text" >
          {comment}
        </div>
      </div>
    </div>
  );
}

Comment.propTypes= {
  userId: PropTypes.number,
  comment: PropTypes.string
}

export default Comment;