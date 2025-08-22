import React from 'react'

const SolarWaterHeater = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://solar-water-heater.vercel.app/"
            title="Solar Water Heater"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SolarWaterHeater