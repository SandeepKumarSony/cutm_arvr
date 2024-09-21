import React from 'react'

const MetalBending = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://metal-bending-machine.vercel.app/"
            title="Metal Bending Machine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MetalBending