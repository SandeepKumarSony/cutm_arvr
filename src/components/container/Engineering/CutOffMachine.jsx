import React from 'react'

const CutOffMachine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://cut-off-machine-14-inch.vercel.app/"
            title="Cut Off Machine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default CutOffMachine