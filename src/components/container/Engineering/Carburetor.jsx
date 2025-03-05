import React from 'react'

const Carburetor = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://carburator.vercel.app/"
            title="Carburetor"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Carburetor