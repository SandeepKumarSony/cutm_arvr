import React from 'react'

const ElbowEngine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://elbow-engine.vercel.app/"
            title="Elbow Engine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ElbowEngine