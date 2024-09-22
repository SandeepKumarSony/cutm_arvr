import React from 'react'

const LiquidRocketEngine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://liquid-rocket-engine.vercel.app/"
            title="Liquid Rocket Engine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default LiquidRocketEngine