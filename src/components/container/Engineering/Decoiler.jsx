import React from 'react'

const Decoiler = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://decoiler.vercel.app/"
            title="Decoiler"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Decoiler