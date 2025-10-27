import React from 'react'

const TPChargingModule = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://tp-4056-charging-module.vercel.app/"
            title="TP4056 Charging Module"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default TPChargingModule