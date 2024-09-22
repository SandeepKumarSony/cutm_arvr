import React from 'react'

const CutOffSaw = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://cut-off-saw.vercel.app/"
            title="Cut Off Saw"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default CutOffSaw