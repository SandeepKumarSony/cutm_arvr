import React from 'react'

const Watch = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://watch-steel-xi.vercel.app/"
            title="Watch"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Watch