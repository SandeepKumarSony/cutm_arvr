import React from 'react'

const RoboticManipulator = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://robotic-manipulator.vercel.app/"
            title="Robotic Manipulator"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default RoboticManipulator