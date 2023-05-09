import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';
import { Link } from 'react-router-dom';

function ThreadItem({ id, title, body, category, createdAt, totalComments, user, authUser }) {
  return (
    <div className='mb-2 rounded-lg border-2 border-sky-200 p-4'>
      <Link to={`/threads/${id}`}>
        <p className='text-lg font-bold text-sky-900'>{title}</p>
      </Link>
      <p
        dangerouslySetInnerHTML={{
          __html: body.slice(0, 300) + (body.length > 300 ? '...' : ''),
        }}
      ></p>
      <div className='flex gap-1'>
        <p className='font-semibold'>{user.name}</p>
        <p>
          {postedAt(createdAt)} - {totalComments} comments
        </p>
      </div>
      <p className='text-blue-600'>#{category}</p>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };

export default ThreadItem;
