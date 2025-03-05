import React from 'react'

const BrakeCaliper = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://brake-caliper.vercel.app/"
            title="Brake Caliper"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default BrakeCaliper