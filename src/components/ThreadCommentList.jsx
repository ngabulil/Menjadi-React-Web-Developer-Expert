import React from 'react';
import PropTypes from 'prop-types';
import ThreadCommentItem from './ThreadCommentItem';

function ThreadCommentList({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <ThreadCommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
}

ThreadCommentList.propTypes = {
  comments: PropTypes.array,
};

export default ThreadCommentList;
