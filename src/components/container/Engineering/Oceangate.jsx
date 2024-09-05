import React from 'react'

const OceanGate = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://ocean-gate.vercel.app/"
            title="OceanGate Titan Submersible"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default OceanGate