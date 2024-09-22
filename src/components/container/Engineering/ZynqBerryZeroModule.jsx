import React from 'react'

const ZynqBerryZeroModule = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://zynq-berry-zero-module.vercel.app/"
            title="ZynqBerryZero Module"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ZynqBerryZeroModule