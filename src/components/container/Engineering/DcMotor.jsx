import React from 'react'

const DcMotor = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://dc-motor.vercel.app/"
            title="Dc Motor"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default DcMotor