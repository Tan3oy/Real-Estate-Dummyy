import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import './Sticky_Header-style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-free/css/all.min.css';

import GoogleTranslate from '../Google_Translate'


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

        <div className={`sticky-header-grid-container ${isScrolled?"hidden":"visible"}`}>
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
                    <div id="google_translate_element"></div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='sticky-header-grid-items-column1-and-column2'>
                    <div className='sticky-header-social-icons'>
                        <Link to="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></Link>
                        <Link to="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></Link>
                        <Link to="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                        <Link to="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></Link>
                        <Link to="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} /></Link>
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