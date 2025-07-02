import React from 'react'

const TurboCharger = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://turbo-charger.vercel.app/"
            title="Turbo Charger"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default TurboCharger