import React from 'react'

const CnCmach = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://cnc-3018.vercel.app/"
            title="CNC-3018"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default CnCmach