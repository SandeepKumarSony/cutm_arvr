import React from 'react'

const SyringeDispenser = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://syringe-dispenser.vercel.app/"
            title="Syringe Dispenser"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SyringeDispenser