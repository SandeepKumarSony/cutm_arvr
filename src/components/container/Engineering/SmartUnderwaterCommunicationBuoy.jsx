import React from 'react'

const SmartUnderwaterCommunicationBuoy = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://smart-underwater-communication-buoy.vercel.app/"
            title="Smart Underwater Communication Buoy"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SmartUnderwaterCommunicationBuoy