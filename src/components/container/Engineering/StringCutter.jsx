import React from 'react'

const StringCutter = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://string-cutter.vercel.app/"
            title="StringCutter"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default StringCutter