import React from 'react'

const Car = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://car-steering.vercel.app/"
            title="AutomaticAirValve"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Car