import React from 'react'

const StillsonWrench = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://stillson-wrench.vercel.app/"
            title="Stillson Wrench"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default StillsonWrench