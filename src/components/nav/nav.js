import React from 'react';
import Hamburger from './hamburger';
import { NavLink } from 'react-router-dom'

const nav = (props) => {
  return <div className='nav'>
            <NavLink to='/ecommerce' className='nav-brand'>Frontier</NavLink>
            <Hamburger state={props.state} onClick={props.onClick} />
        </div>;
};

export default nav;
