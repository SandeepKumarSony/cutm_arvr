import React from 'react'

const SCREWJACK = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://screwjack.vercel.app/"
            title="Screw Jack"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SCREWJACK