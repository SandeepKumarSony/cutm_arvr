import React from 'react'

const PressureSensor = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://pressure-sensor-hx-710-b.vercel.app/"
            title="Pressure Sensor"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default PressureSensor