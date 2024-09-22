import React from 'react'

const GateValve = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://gate-valve.vercel.app/"
            title="Gate Valve"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default GateValve