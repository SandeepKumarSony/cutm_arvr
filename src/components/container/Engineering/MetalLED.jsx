import React from 'react'

const MetalLED = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://metal-led.vercel.app/"
            title="Metal LED Illuminated Latching"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MetalLED