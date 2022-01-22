import React from 'react';


const Hamburger = (props) => {

  return <div onClick={props.onClick} className="hamburger">
            <div className={props.state ? "hamburger-icon open": "hamburger-icon"}></div>
        </div>;
};

export default Hamburger;
