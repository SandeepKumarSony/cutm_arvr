import React from 'react'

const SquidGuttingMachine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://squid-gutting-machine.vercel.app/"
            title="Squid Gutting Machine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SquidGuttingMachine