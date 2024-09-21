import React from 'react'

const WindTurbine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://wind-turbine.vercel.app/"
            title="Wind Turbine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default WindTurbine