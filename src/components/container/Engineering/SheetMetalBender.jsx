import React from 'react'

const SheetMetalBender = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://sheet-metal-bender.vercel.app/"
            title="Sheet Metal Bender"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SheetMetalBender