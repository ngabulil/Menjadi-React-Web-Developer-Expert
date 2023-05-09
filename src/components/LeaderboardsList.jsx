import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardsList({ user, score }) {
  return (
    <div className='flex items-center justify-between border-b-2 border-solid border-black pb-2'>
      <div className='flex items-center gap-2'>
        <img className='h-6 w-6 rounded-full' src={user.avatar} />
        <p className='text-base'>{user.name}</p>
      </div>
      <p className='text-base'>{score}</p>
    </div>
  );
}

const userShape = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const leaderboardsShape = {
  score: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

LeaderboardsList.propTypes = {
  ...leaderboardsShape,
};

export default LeaderboardsList;
