import React from 'react'

const PneumaticControlBox = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://pneumatic-control-box.vercel.app/"
            title="Pneumatic Control Box"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default PneumaticControlBox