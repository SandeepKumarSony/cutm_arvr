import React from 'react'

const Excavator = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://excavator-mocha.vercel.app/"
            title="Excavator"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Excavator