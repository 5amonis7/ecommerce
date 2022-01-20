import React from 'react';
import { NavLink } from 'react-router-dom'

const menu = (props) => {


  return <div className={props.state ? "menu open": "menu"}>
            <section className="menu-links">
            <NavLink className="menu-link" to='/'>Home</NavLink>
            <NavLink className="menu-link" to='/school'>School</NavLink>
            <NavLink className="menu-link" to='/hiking'>Hiking</NavLink>
            <NavLink className="menu-link" to='/work'>Work</NavLink>
            </section>
        </div>;
};

export default menu;
