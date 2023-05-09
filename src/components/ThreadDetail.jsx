import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function ThreadDetail({ title, body, createdAt, owner, category }) {
  return (
    <div>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='text-lg text-blue-600'>#{category}</p>
      <div className='mt-4 mb-2 flex items-center gap-1'>
        <img className='w-8 rounded-full' src={owner.avatar} />
        <p className='font-semibold'>{owner.name}</p>
      </div>
      <p dangerouslySetInnerHTML={{ __html: body }}></p>
      <div className='flex justify-end'>
        <p>{postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  category: PropTypes.string.isRequired,
};

export default ThreadDetail;
