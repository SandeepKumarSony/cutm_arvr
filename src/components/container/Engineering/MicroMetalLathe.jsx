import React from 'react'

const MicroMetalLathe = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://micro-metal-lathe.vercel.app/"
            title="Micro Metal Lathe"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MicroMetalLathe