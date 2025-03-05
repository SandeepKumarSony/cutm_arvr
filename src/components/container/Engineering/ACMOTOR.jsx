import React from 'react'

const ACMOTOR = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://ac-motor.vercel.app/"
            title="AC MOTOR"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ACMOTOR