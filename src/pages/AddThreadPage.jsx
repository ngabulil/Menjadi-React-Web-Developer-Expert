import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadInput from '../components/ThreadInput';
import { asyncAddThread } from '../states/threads/action';

function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));

    navigate('/');
  };

  return (
    <div className='mt-4'>
      <div className='mx-auto w-4/5 rounded-xl bg-white p-8 shadow-xl'>
        <h1 className='mb-5 text-2xl font-bold'>Buat Diskusi Baru</h1>
        <ThreadInput addThread={onAddThread} />
      </div>
    </div>
  );
}

export default AddThreadPage;
