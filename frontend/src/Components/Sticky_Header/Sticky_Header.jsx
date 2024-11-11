// import React, { useState, useEffect, useRef } from 'react';
import './Sticky_Header-style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-free/css/all.min.css';

import GoogleTranslate from '../Google_Translate'


const Sticky_Header = () => {

    // const [lastScrollTop, setLastScrollTop] = useState(0);
    // const stickyHeaderGridContainerRef = useRef(null);

    // const handleScroll = () => {
    //     const scrollTop = window.scrollY || document.documentElement.scrollTop;

    //     if (stickyHeaderGridContainerRef.current) {
    //         if (scrollTop > lastScrollTop) {
    //             // User is scrolling down
    //                 if (scrollTop > '100') {
    //                     stickyHeaderGridContainerRef.current.style.top = '-95px';
    //                 }
    //         } else {
    //             // User is scrolling up
    //             stickyHeaderGridContainerRef.current.style.top = '0';
    //         }
    //     }

    //     setLastScrollTop(scrollTop);
    //     // console.log(scrollTop);
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);

    //     // Cleanup the event listener on component unmount
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [lastScrollTop]);


    // var lastScrollTop = 0; 
    // var navbar = document.getElementById("sticky-header-grid-container");
    
    // window.addEventListener("scroll", function() { 
    //     var scrollTop = window.scrollY || document.documentElement.scrollTop;
    //     if (scrollTop > lastScrollTop) {
    //         // User is scrolling down
    //         navbar.style.top = "-80px";
    //     } else {
    //         // User is scrolling up
    //         navbar.style.top = "0";
    //     }
    //     lastScrollTop = scrollTop;
    // });


  return (
    <div>

        <div className='sticky-header-grid-container'>
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