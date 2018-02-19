// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import logoSrc from '../../assets/logo.svg';

export const Header = () => (
  <header className='h-navbar bg-white shadow-md z-50'>
    <div className='max-w-xl mx-auto flex justify-between items-center h-full px-4 lg:px-0'>
      <Link to='/' className='block py-2 px16 h-full cursor-pointer'>
        <img className='block h-full cursor-pointer' src={logoSrc} alt='logo' />
      </Link>
    </div>
  </header>
);

export default Header;
