import React from 'react'

const BuckConverter = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://buck-converter.vercel.app/"
            title="Alternator"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default BuckConverter