import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <div>
      <div className='mb-3 flex flex-col'>
        <label className='font-semibold'>Title</label>
        <input
          placeholder='Masukkan Judul'
          className='rounded-md border-2 border-black px-2 py-1 text-sm'
          type='text'
          value={title}
          onChange={onTitleChange}
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label className='font-semibold'>Category</label>
        <input
          placeholder='Masukkan Kategori'
          className='rounded-md border-2 border-black px-2 py-1 text-sm'
          type='text'
          value={category}
          onChange={onCategoryChange}
        />
      </div>
      <div className='mb-2 flex flex-col'>
        <label className='font-semibold'>Content</label>
        <textarea
          placeholder='Masukkan Isi Diskusi'
          className='rounded-md border-2 border-black px-2 py-1 text-sm'
          value={body}
          onChange={onBodyChange}
          rows={5}
        ></textarea>
      </div>
      <button onClick={() => addThread({ title, category, body })} className='w-full rounded-md bg-sky-900 p-1 text-white'>
        Create
      </button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
