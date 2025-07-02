import React from 'react'

const PepperBlendingMachine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://pepper-blending-machine.vercel.app/"
            title="Pepper Blending Machine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default PepperBlendingMachine