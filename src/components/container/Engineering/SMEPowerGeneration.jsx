import React from 'react'

const SMEPowerGeneration = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://s-m-e-power-generation.vercel.app/"
            title="SME Power Generation"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SMEPowerGeneration