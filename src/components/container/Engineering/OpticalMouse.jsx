import React from 'react'

const OpticalMouse = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://optical-mouse.vercel.app/"
            title="Optical Mouse"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default OpticalMouse