import React from 'react'
import './Featured_Properties-style.css'
import Featured_Properties_Components_Card from '../../../../Components/Featured_Properties_Components/Featured_Properties_Components_Card'

function Featured_Properties() {

  return (
    <>
        <div className='featured-properties-and-container-box'>
            <div className="featured-properties-box">
                <h1 className="featured-properties-head">Featured Properties</h1>
                <p className="featured-properties-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quaerat eius reiciendis distinctio nihil corporis fugiat odit quidem consequatur! Ratione dolore possimus ipsam quibusdam impedit, eum ipsa odio molestias modi?</p>
            </div>

            <div className='container'>
                <Featured_Properties_Components_Card
                    imageLeftLabel="For sale"
                    imageRightLabel="Urgent"
                    imageUrl="https://demo.websolutionus.com/findestate/uploads/custom-images/property-thumb-2021-10-12-09-54-08-7799.png"
                    title="Hotel And Resort"
                    rating="4.5 ★★★★☆"
                    description="2811 Battery Place Northwest"
                    coefficientBed="22"
                    coefficientBath="10"
                    coefficientSqft="400"
                    price="200" />
                <Featured_Properties_Components_Card
                    imageLeftLabel="For rent"
                    imageRightLabel=""
                    imageUrl="https://demo.websolutionus.com/findestate/uploads/custom-images/property-thumb-2021-10-12-09-50-10-9705.png"
                    title="House and Garden"
                    rating="2.5 ★★★☆☆"
                    description="Saybrook Point Resort & Marina"
                    coefficientBed="16"
                    coefficientBath="4"
                    coefficientSqft="450"
                    price="500/ Yearly" />
                <Featured_Properties_Components_Card
                    imageLeftLabel="For rent"
                    imageRightLabel="Urgent"
                    imageUrl="https://demo.websolutionus.com/findestate/uploads/custom-images/property-thumb-2021-09-22-12-42-07-7843.jpg"
                    title="Hotel And Resort"
                    rating="3.5 ★★★★☆"
                    description="3015 Grand Avenue, CocoWalk"
                    coefficientBed="18"
                    coefficientBath="10"
                    coefficientSqft="300"
                    price="500/ Monthly" />
                <Featured_Properties_Components_Card
                    imageLeftLabel="For sale"
                    imageRightLabel="Urgent"
                    imageUrl="https://demo.websolutionus.com/findestate/uploads/custom-images/property-thumb-2021-10-18-09-34-39-5668.jpg"
                    title="Hotel And Resort"
                    rating="0.0 ☆☆☆☆☆"
                    description="Gorgeous Villa Bay View"
                    coefficientBed="45"
                    coefficientBath="30"
                    coefficientSqft="750"
                    price="650" />
                <Featured_Properties_Components_Card
                    imageLeftLabel="For sale"
                    imageRightLabel="Urgent"
                    imageUrl="https://demo.websolutionus.com/findestate/uploads/custom-images/property-thumb-2021-10-12-09-46-30-4037.jpg"
                    title="Hotel And Resort"
                    rating="0.0 ☆☆☆☆☆"
                    description="1745 T Street Southeast"
                    coefficientBed="25"
                    coefficientBath="5"
                    coefficientSqft="630"
                    price="650" />
                <Featured_Properties_Components_Card
                    imageLeftLabel="For sale"
                    imageRightLabel="Urgent"
                    imageUrl="https://demo.websolutionus.com/findestate/uploads/custom-images/property-thumb-2021-10-12-09-42-04-5671.jpg"
                    title="House and Garden"
                    rating="0.0 ☆☆☆☆☆"
                    description="8502 Madrone Avenue"
                    coefficientBed="15"
                    coefficientBath="10"
                    coefficientSqft="1000"
                    price="300/ Monthly" />
            </div>
        </div>
    </>
  )
}

export default Featured_Properties