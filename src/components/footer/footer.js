import React from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const footer = () => {

    const year = new Date().getFullYear()

  return <footer className="footer">
            <NavLink to="/">Frontier</NavLink>
            <div className="group1">
                <FontAwesomeIcon className="facebook" icon={faFacebook} />
                <FontAwesomeIcon className="twitter" icon={faTwitter} />
            </div>
            <div className="group2">
                <FontAwesomeIcon className="instagram" icon={faInstagram} />
                <FontAwesomeIcon className="youtube" icon={faYoutube} />
            </div>

            <div className="company">
               <p>About us</p> 
               <p>Contact us</p> 
               <p>History</p> 
            </div>

            <p className='end'>Copyright&copy; {year}</p>
        </footer>;
};

export default footer;
