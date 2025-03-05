import React from 'react'

const CarStartingSyatem = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://car-starting-system.vercel.app/"
            title="Car Starting Syatem"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default CarStartingSyatem