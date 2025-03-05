import React from 'react'

const CarCloserDoor = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://car-clouser-door.vercel.app/"
            title="Car Closer Door"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default CarCloserDoor