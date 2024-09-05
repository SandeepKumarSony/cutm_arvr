import React from 'react'

const PlanetaryGearbox = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://generator-and-planetary-gearbox.vercel.app/"
            title="Generator And Planetary Gearbox"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default PlanetaryGearbox