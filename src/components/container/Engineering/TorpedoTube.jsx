import React from 'react'

const TorpedoTube = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://torprdo-tube.vercel.app/"
            title="Torpedo Tube"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default TorpedoTube