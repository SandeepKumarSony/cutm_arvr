import React from 'react'

const Aliexpress = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://aliexpress-psi.vercel.app/"
            title="Aliexpress BT30 ATC"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Aliexpress