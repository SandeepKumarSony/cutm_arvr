import React from 'react'

const DiscGrinder = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://disc-grinder.vercel.app/"
            title="Disc Grinder"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default DiscGrinder