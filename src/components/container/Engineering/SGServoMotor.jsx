import React from 'react'

const SGServoMotor = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://sg-servo-motor.vercel.app/"
            title="SG90 Servo Motor"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SGServoMotor