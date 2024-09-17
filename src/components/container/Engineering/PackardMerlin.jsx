import React from 'react'

const PackardMerlin = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://packard-merlin.vercel.app/"
            title="Packard Merlin"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default PackardMerlin