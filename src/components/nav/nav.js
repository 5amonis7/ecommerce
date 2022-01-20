import React from 'react';
import Hamburger from './hamburger';

const nav = (props) => {
  return <div className='nav'>
            <h1 className='nav-brand'>Frontier</h1>
            <Hamburger state={props.state} onClick={props.onClick} />
        </div>;
};

export default nav;
