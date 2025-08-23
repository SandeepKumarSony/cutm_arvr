import React from 'react'

const LogCraneGrapple = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://log-crane-grapple-body.vercel.app/"
            title="Log Crane Grapple"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default LogCraneGrapple