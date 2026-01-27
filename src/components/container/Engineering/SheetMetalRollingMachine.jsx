import React from 'react'

const SheetMetalRollingMachine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://sheet-metal-rolling-machine.vercel.app/"
            title="Sheet Metal Rolling Machine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SheetMetalRollingMachine