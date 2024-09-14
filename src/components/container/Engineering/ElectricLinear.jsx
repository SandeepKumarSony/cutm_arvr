import React from 'react'

const ElectricLinear = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://electric-linear-actuator.vercel.app/"
            title="Electric Linear Actuator"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ElectricLinear