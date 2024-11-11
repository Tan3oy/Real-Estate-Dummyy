import React from 'react'
import imgBath from '../../assets/imgBath.png'
import imgBed from '../../assets/imgBed.png'
import imgSqrt from '../../assets/imgSqrt.png'
// import '../../Pages/Home/Featured_Properties/Featured_Properties-style.css'
import '../../Pages/Home/Sections/Featured_Properties/Featured_Properties-style.css'

import { useEffect, useRef } from 'react';

const Featured_Properties_Components_Card = ({imageLeftLabel, imageUrl, imageRightLabel, title, rating, description, coefficientBed, coefficientBath, coefficientSqft, price}) => {

    // remove classes of the left-label on the main image of the card
    const imageLeftLabelRef = useRef(null);
    useEffect(() => {
        const imageLeftLabel = imageLeftLabelRef.current;
    
        if (imageLeftLabel && imageLeftLabel.textContent === "") {
          imageLeftLabel.classList.remove('badge', 'for-sale');
        }
      }, []);

    // remove classes of the right-label on the main image of the card
    const imageRightLabelRef = useRef(null);
    useEffect(() => {
        const imageRightLabel = imageRightLabelRef.current;
    
        if (imageRightLabel && imageRightLabel.textContent === "") {
          imageRightLabel.classList.remove('badge', 'urgent');
        }
      }, []);


  return (
        <div className="card">
            <section className="sec1">
                <div className="card-badges">
                    <span ref={imageLeftLabelRef} className="badge for-sale">{imageLeftLabel}</span>
                    <span ref={imageRightLabelRef} className="badge urgent">{imageRightLabel}</span>
                </div>
                <img src={imageUrl} alt="image1" className="card-img"/>
            </section>
            <section className="sec2">
                <section className="sec2-1">
                    <p className="sec2-1-left">{title}</p>
                    <p className="sec2-1-right">{rating}</p>
                </section>
                <div className="divider"></div>
                <section className="sec2-2">
                    <h2>{description}</h2>
                </section>
                <br />
                <section className="sec2-3">
                    <div className="property-details">
                        <div className="detail-item">
                            <img src={imgBed} alt="Bed-image" width="25px"/>
                            &nbsp;
                            <span>{coefficientBed} Bed</span>
                        </div>
                        <div className="detail-item">
                            <img src={imgBath} alt="Bath-image" width="25px"/>
                            &nbsp;
                            <span>{coefficientBath} Bath</span>
                        </div>
                        <div className="detail-item">
                            <img src={imgSqrt} alt="Sqrt-image" width="25px"/>
                            &nbsp;
                            <span>{coefficientSqft} Sqft</span>
                        </div>
                    </div>
                </section>
                <div className="divider"></div>
                <section className="sec2-4">
                    <p className="price">${price}</p>
                    <button type="button" className='button-click'>View Details</button>
                </section>
            </section>
        </div>
  )
}

export default Featured_Properties_Components_Card