import React from 'react'

const DoubleAarms = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://double-a-arms.vercel.app/"
            title="Double A-arms"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default DoubleAarms