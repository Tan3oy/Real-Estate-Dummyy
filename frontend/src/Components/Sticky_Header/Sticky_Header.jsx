import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
// import './Sticky_Header-style.css'

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
{/* sticky-header-grid-container */}
        <div className={` ${isScrolled?"hidden":"visible"}`}>
            {/* <div className='sticky-header-grid-items fgj1'>
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
            <div className='sticky-header-grid-items fgj'></div>
            <div className='sticky-header-grid-items fgj'>
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

            <div class="sticky-header-grid-container-bottom-empty-div">
            </div> */}

            <div className='px-1 sm:px-6 flex justify-center bg-[#0b2c3d] fixed top-0 w-[100%] h-[95px] transition-[top] duration-1000 ease-out z-[1000]'>
                <div className='flex flex-col justify-center items-center xl:flex-row gap-2 xl:gap-6'>
                        <div className='flex gap-2 justify-center items-center'>
                            <i className="fa-solid fa-envelope sticky-header-flag" style={{ color: 'transparent', WebkitTextStrokeColor: 'rgba(0, 255, 128, 0.6)', WebkitTextStrokeWidth: '2px'}}></i>
                            <a href="#" className='text-[#f0f8ff]'>info23@website.com</a>
                        </div>
                        <div className='flex gap-2 justify-center items-center'>
                            <i className="fa-solid fa-phone sticky-header-flag" style={{ color: 'transparent', WebkitTextStrokeColor: 'rgba(0, 255, 128, 0.6)', WebkitTextStrokeWidth: '2px'}}></i>
                            <a href="#" className='text-[#f0f8ff]'>111-233-1273</a>
                        </div>
                </div>
                <div className='w-0 lg:w-10 xl:w-60'></div>
                <div className='flex gap-6'>
                        <div className='hidden lg:flex justify-center items-center' style={{ backgroundColor: '#0b2c3d', color: '#0b2c3d', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px', border: '2px solid #0b2c3d', fontSize: '10px' }}>
                            <GoogleTranslate />
                            <div id="google_translate_element"></div>
                        </div>
                        <div className='hidden lg:flex gap-[15px] justify-center items-center'>
                            <Link to="https://www.facebook.com" className='flex justify-center items-center w-[27px] h-[27px] rounded-[50%] border-2 border-solid border-[#00ff8080] text-[#f0f8ff] bg-[#0a2c3b] text-sm no-underline transition-all duration-300 ease-in-out hover:bg-[#00ff80] hover:text-[#2c3e50]'><FontAwesomeIcon icon={faFacebookF} /></Link>
                            <Link to="https://www.twitter.com" className='flex justify-center items-center w-[27px] h-[27px] rounded-[50%] border-2 border-solid border-[#00ff8080] text-[#f0f8ff] bg-[#0a2c3b] text-sm no-underline transition-all duration-300 ease-in-out hover:bg-[#00ff80] hover:text-[#2c3e50]'><FontAwesomeIcon icon={faTwitter} /></Link>
                            <Link to="https://www.linkedin.com" className='flex justify-center items-center w-[27px] h-[27px] rounded-[50%] border-2 border-solid border-[#00ff8080] text-[#f0f8ff] bg-[#0a2c3b] text-sm no-underline transition-all duration-300 ease-in-out hover:bg-[#00ff80] hover:text-[#2c3e50]'><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                            <Link to="https://www.instagram.com" className='flex justify-center items-center w-[27px] h-[27px] rounded-[50%] border-2 border-solid border-[#00ff8080] text-[#f0f8ff] bg-[#0a2c3b] text-sm no-underline transition-all duration-300 ease-in-out hover:bg-[#00ff80] hover:text-[#2c3e50]'><FontAwesomeIcon icon={faInstagram} /></Link>
                            <Link to="https://www.youtube.com" className='flex justify-center items-center w-[27px] h-[27px] rounded-[50%] border-2 border-solid border-[#00ff8080] text-[#f0f8ff] bg-[#0a2c3b] text-sm no-underline transition-all duration-300 ease-in-out hover:bg-[#00ff80] hover:text-[#2c3e50]'><FontAwesomeIcon icon={faYoutube} /></Link>                    
                        </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Sticky_Header