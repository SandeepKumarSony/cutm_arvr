import React from 'react'

const LandingMechanism = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://landing-mechanism.vercel.app/"
            title="Landing Mechanism"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default LandingMechanism