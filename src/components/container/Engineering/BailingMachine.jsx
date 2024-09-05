import React from 'react'

const BailingMachine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://baling-machine.vercel.app/"
            title="Bailing Machine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default BailingMachine