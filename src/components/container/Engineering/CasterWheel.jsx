import React from 'react'

const CasterWheel = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://caster-wheel.vercel.app/"
            title="Caster Wheel"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default CasterWheel