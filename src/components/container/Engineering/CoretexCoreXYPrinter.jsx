import React from 'react'

const CoretexCoreXYPrinter = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://cortex3-d-core-xy-3-d-printer.vercel.app/"
            title="Cortex3D CoreXY 3D Printer"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default CoretexCoreXYPrinter