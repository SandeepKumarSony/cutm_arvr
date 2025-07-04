import React from 'react'

const WormGear = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://worm-gear.vercel.app/"
            title="Worm Gear"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default WormGear