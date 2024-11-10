import React, { useState, useEffect, useRef } from 'react';
import './Sticky_header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-free/css/all.min.css';

import GoogleTranslate from '../Components/Google_Translate';

const Sticky_Header = () => {
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // console.log(scrollPosition);
            setIsScrolled(scrollPosition>80? true : false)     
        }
    document.addEventListener('scroll',handleScroll)
    return ()=>(
        document.removeEventListener('scroll',handleScroll)
    )
    },[isScrolled])

return (
    <div>
        <div className={`sticky-header-grid-container h-21 ${isScrolled?"hidden":"visible"}`}>
            <div className='sticky-header-grid-items'>
                <div className='sticky-header-grid-items-column1-and-column2'>
                    <div><i className="fa-solid fa-envelope sticky-header-flag"></i></div>
                    &nbsp;&nbsp;
                    <a href="#">info23@website.com</a>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='sticky-header-grid-items-column1-and-column2'>
                    <div><i className="fa-solid fa-phone sticky-header-flag"></i></div>
                    &nbsp;&nbsp;
                    <a href="#">111-233-1273</a>
                </div>
            </div>
            <div className='sticky-header-grid-items'></div>
            <div className='sticky-header-grid-items'>
                <div className='sticky-header-grid-items-column1-and-column2'>
                    <GoogleTranslate />
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='sticky-header-grid-items-column1-and-column2'>
                    <div className='sticky-header-social-icons'>
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                </div>
            </div>
        </div>        
        <div class="sticky-header-grid-container-bottom-empty-div">
        </div>
    </div>
)
}

export default Sticky_Header