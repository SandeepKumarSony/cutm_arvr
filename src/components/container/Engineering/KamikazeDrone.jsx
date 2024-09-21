import React from 'react'

const KamikazeDrone = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://kamikaze-drone.vercel.app/"
            title="Kamikaze Drone"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default KamikazeDrone