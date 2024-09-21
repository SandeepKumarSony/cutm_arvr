import React from 'react'

const Amplifier = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://amplifier-ashen.vercel.app/"
            title="Amplifier"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Amplifier