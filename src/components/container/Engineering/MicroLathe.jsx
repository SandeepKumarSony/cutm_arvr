import React from 'react'

const MicroLathe = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://micro-lathe-machine.vercel.app/"
            title="MicroLathe"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MicroLathe