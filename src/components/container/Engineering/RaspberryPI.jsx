import React from 'react'

const RaspberryPI = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://raspberry-pi.vercel.app/"
            title="Raspberry PI 5"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default RaspberryPI