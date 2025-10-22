import React from 'react'

const MiniWindmill = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://string-cutter.vercel.app/"
            title="MiniWindmill"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MiniWindmill