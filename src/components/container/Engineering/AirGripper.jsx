import React from 'react'

const AirGripper = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://air-gripper.vercel.app/"
            title="Air Gripper"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default AirGripper