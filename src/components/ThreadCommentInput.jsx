import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadCommentInput({ addCommentThread }) {
  const [content, onContentChange] = useInput('');

  return (
    <div>
      <p className='text-lg font-medium'>Comment</p>
      <textarea
        value={content}
        onChange={onContentChange}
        className='w-full rounded-md border-2 border-solid border-black p-2'
        rows={5}
      ></textarea>
      <button className='w-full rounded-md bg-sky-900 p-1 text-white' onClick={() => addCommentThread({ content })}>
        Send
      </button>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  addCommentThread: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
