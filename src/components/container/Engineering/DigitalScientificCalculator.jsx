import React from 'react'

const DigitalScientificCalculator = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://digital-scientific-calculator.vercel.app/"
            title="Digital Scientific Calculator"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default DigitalScientificCalculator