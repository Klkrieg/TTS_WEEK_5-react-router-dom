import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='nav-link' to='/'>
        Home
      </Link>
      <Link className='nav-link' to='/About'>
        About
      </Link>
      <Link className='nav-link' to='/Menu'>
        Menu
      </Link>
      <Link className='nav-link' to='/Blog'>
        Blog
      </Link>
      <Link className='nav-link' to='/Profile'>
        Profile
      </Link>
    </div>
  );
};
