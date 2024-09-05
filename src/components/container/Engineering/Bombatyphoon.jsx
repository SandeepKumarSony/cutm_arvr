import React from 'react'

const Bombatyphoon = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://bomba-typhoon-wilden.vercel.app/"
            title="Bomba Typhoon wilden"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Bombatyphoon