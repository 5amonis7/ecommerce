import React from 'react';
import Hamburger from './hamburger';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"

const Nav = (props) => {

  

  return <div className='nav'>
            <NavLink to='/ecommerce' className='nav-brand'>Frontier</NavLink>
            <Hamburger state={props.state} onClick={props.onClick} />
            <NavLink to='/cart' className='cart-btn'><span>{props.cartAmount == 0 ? '': props.cartAmount}</span><FontAwesomeIcon icon={faCartPlus} /></NavLink>
        </div>;
};

export default Nav;
