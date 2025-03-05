import React from 'react'

const HokkenTelescope = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://hokken-telescope.vercel.app/"
            title="Hokken Telescope"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default HokkenTelescope