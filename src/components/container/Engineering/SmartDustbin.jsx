import React from 'react'

const SmartDustbin = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://smart-dustbin-gamma.vercel.app/"
            title="Smart Dustbin"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SmartDustbin