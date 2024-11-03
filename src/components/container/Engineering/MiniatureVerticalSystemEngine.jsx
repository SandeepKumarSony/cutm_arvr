import React from 'react'

const MiniatureVerticalSystemEngine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://miniature-verticle-steam-engine.vercel.app/"
            title="Miniature Vertical System Engine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MiniatureVerticalSystemEngine