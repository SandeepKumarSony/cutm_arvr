import React from 'react'

const GearSpeed = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://gear-speed-reducer.vercel.app/"
            title="Gear Speed Reducer"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default GearSpeed