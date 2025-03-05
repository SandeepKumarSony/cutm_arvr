import React from 'react'

const ChainConveyor = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://chain-conveyor.vercel.app/"
            title="Chain Conveyor"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ChainConveyor