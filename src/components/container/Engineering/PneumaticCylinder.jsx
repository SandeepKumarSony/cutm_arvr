import React from 'react'

const PneumaticCylinder = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://pneumatic-cylinder.vercel.app/"
            title="Pneumatic Cylinder"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default PneumaticCylinder