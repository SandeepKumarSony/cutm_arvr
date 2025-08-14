import React from 'react'

const MiniGearPump = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://mini-gear-pump1.vercel.app/"
            title="Mini Gear Pump"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MiniGearPump