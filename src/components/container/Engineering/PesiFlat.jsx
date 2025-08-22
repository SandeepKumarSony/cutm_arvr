import React from 'react'

const PesiFlat = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://pesi-7050-flat.vercel.app/"
            title="PESI7050 Flat"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default PesiFlat