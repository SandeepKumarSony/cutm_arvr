import React from 'react'

const HydraulicPress = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://hydraulic-press.vercel.app/"
            title="Hydraulic Press"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default HydraulicPress