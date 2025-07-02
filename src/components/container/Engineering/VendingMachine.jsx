import React from 'react'

const VendingMachine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://vending-machine-ruby.vercel.app/"
            title="Vending Machine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default VendingMachine