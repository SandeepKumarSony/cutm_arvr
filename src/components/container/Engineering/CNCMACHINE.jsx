import React from 'react'

const CNCMACHINE = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://cnc-machine.vercel.app/"
            title="CNC MACHINE"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default CNCMACHINE