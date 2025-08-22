import React from 'react'

const SonyCameraSensor = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://sony-camera-sensor.vercel.app/"
            title="Sony Camera Sensor"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SonyCameraSensor