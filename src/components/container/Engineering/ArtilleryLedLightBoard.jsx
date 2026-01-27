import React from 'react'

const ArtilleryLedLightBoard = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://artillery-led-light-board.vercel.app/"
            title="Artillery Led Light Board"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ArtilleryLedLightBoard