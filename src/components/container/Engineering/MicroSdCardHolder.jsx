import React from 'react'

const MicroSdCardHolder = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://micro-sd-card-holder.vercel.app/"
            title="Micro Sd Card and Holder"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MicroSdCardHolder