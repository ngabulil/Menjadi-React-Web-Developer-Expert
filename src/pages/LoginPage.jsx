import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <div className='m-auto flex h-screen'>
      <div className='flex w-1/2'>
        <div className='mx-4 my-32 flex w-full items-center rounded-xl bg-white p-7 shadow-lg'>
          <div className='w-full'>
            <div className='text-center text-2xl font-bold'>
              <h2>Login</h2>
            </div>
            <div>
              <LoginInput login={onLogin} />
              <p>
                Dont have an account?{' '}
                <Link className='text-blue-500 hover:underline' to='/register'>
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-1/2 bg-sky-900'>
        <div className='flex w-full'>
          <img
            className='m-auto'
            src='https://upload.wikimedia.org/wikipedia/id/e/e0/EVOS_Esports_Logo_%28SVG%29_-_Vector69Com.svg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
