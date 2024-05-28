import React from 'react'

const GasolineG = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://gasoline-generator.vercel.app/"
            title="GasolineG"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default GasolineG