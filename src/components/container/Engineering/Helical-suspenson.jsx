import React from 'react'

const HelicalSuspenson = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://helical-ten.vercel.app/"
            title="DieselEngine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default HelicalSuspenson