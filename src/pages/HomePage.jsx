import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ThreadsList from '../components/ThreadsList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { BsFillPlusCircleFill } from 'react-icons/bs';

function HomePage() {
  const { threads = [], users = [], authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  console.log('Threads :', threads);
  console.log('Thread List :', threadList);

  return (
    <div className='mx-auto my-5 w-4/5 rounded-xl border-2 border-solid border-sky-600 bg-white px-8 py-6 pb-8 shadow-xl'>
      <h1 className='mb-3 text-3xl font-bold'>Forum Diskusi</h1>
      <ThreadsList threads={threadList} />
      <Link to='/new' className='fixed bottom-10 right-10 text-blue-900'>
        <BsFillPlusCircleFill size={60} />
      </Link>
    </div>
  );
}

export default HomePage;
