import React from 'react'

const HotRollingMachine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://hot-rolling-machine.vercel.app/"
            title="Hot Rolling Machine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default HotRollingMachine