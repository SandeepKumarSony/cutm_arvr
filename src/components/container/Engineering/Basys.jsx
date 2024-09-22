import React from 'react'

const Basys = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://basys-theta.vercel.app/"
            title="Basys"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Basys