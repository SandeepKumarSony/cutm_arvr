import React from 'react'

const TriggerMechanism = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://trigger-mechanism.vercel.app/"
            title="Trigger Mechanism"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default TriggerMechanism