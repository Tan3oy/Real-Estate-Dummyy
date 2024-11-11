import React from 'react'

const Map = () => {
  return (
      <div className='py-24'>
          <iframe className='mx-auto border-0
                    w-[400px] h-[400px]
                    sm:w-[530px] sm:h-[530px]
                    md:w-[714px] md:h-[450px]
                    lg:w-[923px] lg:h-[450px]
                    xl:w-[1116px] xl:h-[450px]'
                    // 0.93 0.4032258064516129
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.150452603683!2d-0.28586222573920766!3d27.86664831844957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdf59f727cc23851%3A0x32deccc0dc0fe0c1!2sBase%20de%20vie!5e0!3m2!1sbn!2sin!4v1730892583844!5m2!1sbn!2sin"
                  // width="1116" height="450"
                  allowfullscreen=""
                  loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
      </div>
  )
}

export default Map