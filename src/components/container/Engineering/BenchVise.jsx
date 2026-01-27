import React from 'react'

const BenchVise = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://bench-visee.vercel.app/"
            title="Bench Vise"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default BenchVise