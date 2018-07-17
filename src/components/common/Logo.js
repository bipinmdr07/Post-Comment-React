import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className='item' >
      <img src={ logo }
      style={{width : 50}}
       alt="logo"/>

      Post-Comment
    </Link>
  )
}

export default Logo;