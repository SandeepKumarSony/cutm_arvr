import React from 'react'

const VEngineAssembly = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://10-engine.vercel.app/"
            title="V10 Engine Assembly"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default VEngineAssembly