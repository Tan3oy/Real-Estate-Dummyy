import React from 'react'
import { Link } from 'react-router-dom'
import './Footer_Find_Estate-style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer_Find_Estate = () => {
  return (
    <div>       
        <footer className='footer'>
            <div className='footer-grid-container'>
                <div className='footer-grid-items'>
                    <img src="https://demo.websolutionus.com/findestate/uploads/website-images/logo-2021-10-18-07-17-44-4621.png" alt="Image" />
                    <p className='footer-p'>Lorem ipsum dolor sit amet, 
                        per mollis aeterno nostrud in,
                        nam timeam fastidii eu.
                        Commodo nonumes vim eu.
                        Quo indoctum voluptatibus 
                        delicatissimi no. Eu cum dico melius. 
                        Cum impetus scribentur ad.</p>
                    <form className="subscribe-form">
                        <input type="email" placeholder="Email *" required />
                        <button type="submit">
                            <div>Subscribe</div>
                        </button>
                    </form>
                </div>

                <div className='footer-grid-items'>
                        <h3>Short Links</h3>
                        <ul>
                            <li className='footer-p footer-column-2_3'><Link to="/about">About Us</Link></li>
                            <li className='footer-p footer-column-2_3'><Link to="/properties/all_properties">All Properties</Link></li>
                            <li className='footer-p footer-column-2_3'><Link to="/blog">Blog</Link></li>
                            <li className='footer-p footer-column-2_3'><Link to="/pricing_plan">Pricing Plan</Link></li>
                        </ul>   
                </div>

                <div className='footer-grid-items'>
                        <h3>Help Link</h3>
                        <ul>
                            <li className='footer-p footer-column-2_3'><Link to="/terms_and_conditions">Terms And Conditions</Link></li>
                            <li className='footer-p footer-column-2_3'><Link to="/privacy_policy">Privacy Policy</Link></li>
                            <li className='footer-p footer-column-2_3'><Link to="/pages/faq">FAQ</Link></li>
                            <li className='footer-p footer-column-2_3'><Link to="/contact">Contact</Link></li>
                        </ul>                  
                </div>

                <div className='footer-grid-items'>
                        <h3>Follow Us</h3>
                        <div className="footer-social-icons footer-p">
                            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>
                        <div className='footer-column-4 footer-p'>
                            <div><i class="fa-solid fa-location-dot footer-flag"></i></div>
                            <a href="#">San Francisco City Hall, San Francisco, CA</a>
                        </div>
                        <div className='footer-column-4 footer-p'>
                            <div><i className="fa-solid fa-phone footer-flag"></i></div>
                            <a href="#">111-233-1273</a>
                        </div>
                        <div className='footer-column-4 footer-p'>
                            <div><i className="fa-solid fa-envelope footer-flag"></i></div>
                            <a href="#">example@gmail.com</a>                           
                        </div>                                 
                </div>
            </div>
        </footer>
        
        <div className='footer-under'>Copyright 2021, Websolutionus. All Rights Reserved.</div>
    </div>
  )
}

export default Footer_Find_Estate