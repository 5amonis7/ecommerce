import React from 'react';
import Hamburger from './hamburger';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"

const Nav = (props) => {

  

  return <div className='nav'>
            <NavLink to='/ecommerce' id='nav-brand'>Frontier</NavLink>

            <div className='nav-bar'>
              <NavLink className='nav-bar_link' to='/ecommerce'>Home</NavLink>
              <NavLink className='nav-bar_link' to='/school'>School</NavLink>
              <NavLink className='nav-bar_link' to='/hiking'>Hiking</NavLink>
              <NavLink className='nav-bar_link' to='/work'>Work</NavLink>
            </div>

            <Hamburger state={props.state} onClick={props.onClick} />
            <NavLink to='/cart' className='cart-btn'><span>{props.cartAmount == 0 ? '': props.cartAmount}</span><FontAwesomeIcon icon={faCartPlus} /></NavLink>
        </div>;
};

export default Nav;
