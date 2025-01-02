import React from 'react'

const OdroidXU = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://odroid-xu-4.vercel.app/"
            title="Odroid XU4"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default OdroidXU