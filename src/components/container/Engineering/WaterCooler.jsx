import React from 'react'

const WaterCooler = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://watercooler-eight.vercel.app/"
            title="Water Cooler"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default WaterCooler