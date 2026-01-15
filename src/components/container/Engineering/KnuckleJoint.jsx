import React from 'react'

const KnuckleJoint = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://knuckle-joint.vercel.app/"
            title="Knuckle Joint"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default KnuckleJoint