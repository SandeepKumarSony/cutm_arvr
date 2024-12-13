import React from 'react'

const AIRgNozzle = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://air-g18-nozzle.vercel.app/"
            title="AIR G18-G17 NOZZLE"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default AIRgNozzle