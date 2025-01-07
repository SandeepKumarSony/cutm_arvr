import React from 'react'

const ToogleClamp = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://toogle-clamp.vercel.app/"
            title="Toogle Clamp"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ToogleClamp