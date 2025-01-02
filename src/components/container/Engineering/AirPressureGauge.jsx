import React from 'react'

const AirPressureGauge = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://air-pressure-gauge.vercel.app/"
            title="Air Pressure Gauge"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default AirPressureGauge