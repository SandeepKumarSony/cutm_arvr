import React from 'react'

const PneumaticShearMachine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://pneumatic-shear-machine.vercel.app/"
            title="Pneumatic Shear Machine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default PneumaticShearMachine