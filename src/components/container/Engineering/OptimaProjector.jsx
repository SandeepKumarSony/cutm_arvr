import React from 'react'

const OptimaProjector = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://optima-projector.vercel.app/"
            title="Optima Projector"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default OptimaProjector