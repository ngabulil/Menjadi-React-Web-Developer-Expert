import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboardActionCreator } from '../states/leaderboard/action';
import LeaderboardsList from '../components/LeaderboardsList';

function LeaderboardPage() {
  const { leaderboard = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboardActionCreator());
  }, [dispatch]);

  if (!leaderboard) {
    return null;
  }

  return (
    <div className='container'>
      <div className='mx-auto my-5 w-3/5 rounded-lg bg-white p-8 shadow-xl'>
        <h1 className='mb-8 text-xl font-bold lg:text-3xl'>User Leaderboards</h1>
        <div className='mb-2 flex items-center justify-between'>
          <h2 className='text-base font-semibold text-indigo-800 md:text-lg lg:text-xl'>User</h2>
          <h2 className='text-base font-semibold text-indigo-800 md:text-lg lg:text-xl'>Score</h2>
        </div>
        <div className='flex flex-col gap-4'>
          {leaderboard.map((leaderboard) => (
            <LeaderboardsList key={leaderboard.user.id} {...leaderboard} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeaderboardPage;
