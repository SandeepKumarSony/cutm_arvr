import React from 'react'

const WirelessGamingMouse = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://w-ireless-gaming-mouse.vercel.app/"
            title="Wireless Gaming Mouse"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default WirelessGamingMouse