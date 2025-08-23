import React from 'react'

const GasDetectorHoneywell = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://gas-detector-honeywell.vercel.app/"
            title="Gas Detector Honeywell"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default GasDetectorHoneywell