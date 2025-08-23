import React from 'react'

const HydroscandPipe = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://hydroscand-pipe.vercel.app/"
            title="Hydroscand Pipe"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default HydroscandPipe