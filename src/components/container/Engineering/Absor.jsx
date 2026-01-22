import React from 'react'

const Absor = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://absor.vercel.app/"
            title="Absor"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Absor