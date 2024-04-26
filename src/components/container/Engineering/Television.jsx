import React from 'react'

const Tv = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://television-zeta.vercel.app/"
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

export default Tv