import React from 'react'

const SIMCard = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://sim-card-mocha.vercel.app/"
            title="SIM Card"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SIMCard