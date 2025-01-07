import React from 'react'

const RaspberryPiSimplified = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://raspberry-pi-4-simplified-single-solid.vercel.app/"
            title="Raspberry Pi Simplified Single Solid"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default RaspberryPiSimplified