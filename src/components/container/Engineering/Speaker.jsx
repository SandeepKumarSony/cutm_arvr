import React from 'react'

const Speaker = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://speaker-delta.vercel.app/"
            title="Speaker"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Speaker