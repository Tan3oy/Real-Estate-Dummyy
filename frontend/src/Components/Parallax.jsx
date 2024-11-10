import React from 'react'
import {Parallax} from 'react-parallax'
const ParallaxContainer = ({children,bgImage,strength}) => (
  <Parallax
      // blur={{ min: -15, max: 15 }}
      bgImage={bgImage}
      strength={strength}
      bgImageStyle={{  objectFit: 'cover' }}

  >
      <div className="parallax-wrapper [border-image:linear-gradient(#092c3d9a,#0b2c3d70)_fill_1]">
        {children}
      </div>

  </Parallax>
);

export default ParallaxContainer;