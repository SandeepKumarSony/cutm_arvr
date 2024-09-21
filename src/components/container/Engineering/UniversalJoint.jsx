import React from 'react'

const UniversalJoint = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://universal-joint.vercel.app/"
            title="Universal Joint"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default UniversalJoint