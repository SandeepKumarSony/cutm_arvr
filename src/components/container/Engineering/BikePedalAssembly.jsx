import React from 'react'

const BikePedalAssembly = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://bike-pedal-assembly.vercel.app/"
            title="Bike Pedal Assembly"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default BikePedalAssembly