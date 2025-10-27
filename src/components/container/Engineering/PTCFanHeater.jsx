import React from 'react'

const PTCFanHeater = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://ptc-fan-heater.vercel.app/"
            title="PTC Fan Heater"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default PTCFanHeater