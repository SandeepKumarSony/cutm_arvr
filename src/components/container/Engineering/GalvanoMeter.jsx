import React from 'react'

const GalvanoMeter = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://galvano-meter.vercel.app/"
            title="Galvano Meter"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default GalvanoMeter