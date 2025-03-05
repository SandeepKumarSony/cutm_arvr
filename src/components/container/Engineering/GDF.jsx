import React from 'react'

const GDF = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://gd-80-f.vercel.app/"
            title="GD 80F"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default GDF