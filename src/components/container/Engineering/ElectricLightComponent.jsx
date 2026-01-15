import React from 'react'

const ElectricLightComponent = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://electric-light-component-yh7t.vercel.app/"
            title="Electric Light Component"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ElectricLightComponent