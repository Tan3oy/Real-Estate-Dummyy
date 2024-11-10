import React from 'react'
import CountUp from 'react-countup'

const Counter = ({value}) => {
  return (
    <div>
      <CountUp 
        start={0}
        end={value}
        duration={2.5}
        enableScrollSpy={true}
        className='text-4xl sm:text-3xl md:text-4xl lg:text-3xl font-bold'
      />
    </div>
  )
}

export default Counter