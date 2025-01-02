import React from 'react'

const HydraulicJack = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://hydraulic-jack.vercel.app/"
            title="Hydraulic Jack"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default HydraulicJack