import React from 'react'

const RaspberryPICamera = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://raspberry-pi-camera.vercel.app/"
            title="Raspberry PI Camera"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default RaspberryPICamera