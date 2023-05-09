import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ authUser, signOut }) {
  const { name, avatar } = authUser;
  console.log(authUser);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className='flex items-center justify-between bg-sky-600 p-6'>
        <h2 className='text-xl font-bold text-white'>
          <Link to='/' className='flex items-center gap-2'>
            EVOS LEGENDS
            <img
              className='w-8'
              src='https://upload.wikimedia.org/wikipedia/id/e/e0/EVOS_Esports_Logo_%28SVG%29_-_Vector69Com.svg'
              alt=''
            />
          </Link>
        </h2>
        <div
          onMouseEnter={() => {
            setMenu(true);
          }}
          onMouseLeave={() => {
            setMenu(false);
          }}
          className='flex items-center gap-2'
        >
          <img className='w-10 rounded-full' src={avatar} alt='' />
          <p className='text-xl'>{name}</p>
          {/* <button className='hidden' type='button' onClick={signOut}>
            Logout
          </button> */}
        </div>
      </nav>
      <div
        id='profile'
        onMouseEnter={() => {
          setMenu(true);
        }}
        onMouseLeave={() => {
          setMenu(false);
        }}
        className={`top-14 right-0 w-full max-w-[200px] rounded-lg bg-white shadow-lg lg:top-16 
    ${menu ? 'absolute ' : 'hidden'}`}
      >
        <ul>
          <li className='cursor-pointer hover:bg-gray-200'>
            <Link to='/leaderboards' className='mx-6 flex w-full items-center gap-6 py-2 text-base font-semibold text-sky-800'>
              Leaderboards
            </Link>
          </li>
          <li className='cursor-pointer rounded-b-lg hover:bg-gray-200'>
            <button
              type='button'
              onClick={signOut}
              className='mx-6 flex w-full items-center gap-6 py-2 text-base font-semibold text-red-600'
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

const authUserShape = {
  name: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
