import React from 'react'

const MovingMechanismAssembly = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://moving-mechanism-assembly.vercel.app/"
            title="Moving Mechanism Assembly"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MovingMechanismAssembly