import React from 'react'

const RadialCooler = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://radial-cooler.vercel.app/"
            title="Radial Cooler"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default RadialCooler