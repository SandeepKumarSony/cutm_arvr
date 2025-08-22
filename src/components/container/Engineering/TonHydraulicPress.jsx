import React from 'react'

const TonHydraulicPress = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://ton-hydraulic-press.vercel.app/"
            title="Ton Hydraulic Press"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default TonHydraulicPress