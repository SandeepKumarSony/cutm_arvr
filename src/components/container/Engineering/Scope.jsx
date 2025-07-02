import React from 'react'

const Scope = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://scope-inky.vercel.app/"
            title="Scope"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Scope