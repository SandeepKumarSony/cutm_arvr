import React from 'react'

const LatheTailStock = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://lathe-tailstock.vercel.app/"
            title="Lathe TailStock"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default LatheTailStock