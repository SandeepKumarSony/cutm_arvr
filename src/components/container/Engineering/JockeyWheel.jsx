import React from 'react'

const JockeyWheel = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://jockey-wheel.vercel.app/"
            title="Jockey Wheel"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default JockeyWheel