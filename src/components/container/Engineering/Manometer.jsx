import React from 'react'

const Manometer = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://manometer.vercel.app/"
            title="Manometer"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Manometer