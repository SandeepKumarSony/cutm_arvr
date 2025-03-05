import React from 'react'

const HighPressurePump = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://high-pressure-pump.vercel.app/"
            title="High Pressure Pump"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default HighPressurePump