import React from 'react'

const CardanJoint = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://cardan-joint.vercel.app/"
            title="Cardan Joint"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default CardanJoint