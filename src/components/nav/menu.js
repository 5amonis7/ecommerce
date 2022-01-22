import React from 'react';
import { NavLink } from 'react-router-dom'

const menu = (props) => {

    function menuItem(e){
      
      let obj = e.target.textContent
      props.product(obj)
      props.onClick()
    }

  return <div className={props.state ? "menu open": "menu"}>
            <section className="menu-links">
              <NavLink onClick={props.onClick}  className="menu-link" to='/'>Home</NavLink>
              <NavLink  onClick={menuItem} className="menu-link" to='/school'>School</NavLink>
              <NavLink  onClick={menuItem} className="menu-link" to='/hiking'>Hiking</NavLink>
              <NavLink  onClick={menuItem} className="menu-link" to='/work'>Work</NavLink>
            </section>
        </div>;
};

export default menu;
