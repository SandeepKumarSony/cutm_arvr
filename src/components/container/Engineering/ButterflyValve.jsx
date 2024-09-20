import React from 'react'

const ButterflyValve = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://butterfly-valve.vercel.app/"
            title="Butterfly Valve"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ButterflyValve