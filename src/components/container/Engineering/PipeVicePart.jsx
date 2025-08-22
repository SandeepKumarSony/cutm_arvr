import React from 'react'

const PipeVicePart = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://pipe-vice-part.vercel.app/"
            title="Pipe Vice Part"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default PipeVicePart