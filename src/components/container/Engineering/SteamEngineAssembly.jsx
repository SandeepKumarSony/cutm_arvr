import React from 'react'

const SteamEngineAssembly = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://steam-engine-assembly.vercel.app/"
            title="Steam Engine Assembly"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SteamEngineAssembly