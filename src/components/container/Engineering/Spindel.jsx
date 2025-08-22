import React from 'react'

const Spindel = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://spindel-bt50.vercel.app/"
            title="Spindel"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Spindel