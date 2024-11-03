import React from 'react'

const PlanetaryGearSystem = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://planetary-gear-system.vercel.app/"
            title="Planetary Gear System"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default PlanetaryGearSystem