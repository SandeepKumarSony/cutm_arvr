import React from 'react'

const VerticalFarming = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://hydroponic-vertical-farming.vercel.app/"
            title="Hydroponic Vertical Farming"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default VerticalFarming