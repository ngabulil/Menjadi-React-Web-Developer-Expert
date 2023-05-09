import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form>
      <div className='mt-2 flex flex-col'>
        <label className='font-bold'>Name</label>
        <input placeholder='Masukkan Username' className='rounded-md border-2 border-solid border-black p-2' type='text' value={name} onChange={onNameChange} />
      </div>
      <div className='mt-2 flex flex-col'>
        <label className='font-bold'>Email</label>
        <input placeholder='Masukkan Email' className='rounded-md border-2 border-solid border-black p-2' type='email' value={email} onChange={onEmailChange} />
      </div>
      <div className='mt-2 flex flex-col'>
        <label className='font-bold'>Password</label>
        <input placeholder='Masukkan Password' className='rounded-md border-2 border-solid border-black p-2' type='password' value={password} onChange={onPasswordChange} />
      </div>
      <button
        type='button'
        className='mt-4 w-full rounded-lg bg-sky-800 py-2 text-white'
        onClick={() => register({ name, email, password })}
      >
        Register
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
