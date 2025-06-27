import React from 'react'

const BenderAssembly = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://bender-assembly.vercel.app/"
            title="Bender Assembly"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default BenderAssembly