import React from 'react'

const MicroSupercharger = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://micro-supercharger.vercel.app/"
            title="Micro Supercharger"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MicroSupercharger