import React from 'react'

const FishingRod = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://fishing-reel-eight.vercel.app//"
            title="Fishing Rod"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default FishingRod