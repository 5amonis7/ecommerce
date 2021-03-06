import React from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const footer = () => {

    const facebook = { url: "https://www.facebook.com/"}
    const instagram = { url: "https://www.instagram.com/" }
    const twitter = { url: "https://twitter.com"}
    const youtube = { url: "https://www.youtube.com"}

    const year = new Date().getFullYear()

    function scroll(){
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

  return <footer className="footer">
            <NavLink onClick={scroll} className="link" to="/ecommerce">Frontier</NavLink>
            <div className="group1">
                <a className="link" rel="noreferrer" target="_blank" href={facebook.url}><FontAwesomeIcon className="facebook"  icon={faFacebook} /></a>
                <a className='link' rel="noreferrer" target="_blank" href={twitter.url}><FontAwesomeIcon className="twitter" icon={faTwitter} /></a>
            </div>
            <div className="group2">
                <a className='link' rel="noreferrer" target="_blank" href={instagram.url}><FontAwesomeIcon className="instagram" icon={faInstagram} /></a>
                <a className='link' rel="noreferrer" target="_blank" href={youtube.url}><FontAwesomeIcon className="youtube" icon={faYoutube} /></a>
            </div>

            <div className="company">
               <NavLink to="/about">About us</NavLink> 
               <NavLink to="/contact">Contact us</NavLink> 
               <NavLink to='/shipping'>Shipping</NavLink> 
            </div>

            <p className='end'>Copyright&copy; {year}</p>
        </footer>;
};

export default footer;
