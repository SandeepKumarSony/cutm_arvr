import React from 'react'

const HydraulicBottleJack = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://hydraulic-bottle-jack.vercel.app/"
            title="Hydraulic Bottle Jack"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default HydraulicBottleJack