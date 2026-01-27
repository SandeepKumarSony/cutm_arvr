import React from 'react'

const SquarePCB = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://dc7015-square-pcb.vercel.app/"
            title="Dc 7015 Square PCB"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SquarePCB