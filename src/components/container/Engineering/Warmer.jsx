import React from 'react'

const Warmer = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://warmer-tau.vercel.app/"
            title="Warmer"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Warmer