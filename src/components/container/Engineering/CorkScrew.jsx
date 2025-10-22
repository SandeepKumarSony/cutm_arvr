import React from 'react'

const CorkScrew = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://cork-screw.vercel.app/"
            title="CorkScrew"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default CorkScrew