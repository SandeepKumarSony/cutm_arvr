import React from 'react'

const MagazineMechanism = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://magazine-mechanism.vercel.app/"
            title="Magazine Mechanism"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MagazineMechanism