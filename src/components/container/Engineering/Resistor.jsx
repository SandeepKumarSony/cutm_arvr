import React from 'react'

const Resistor = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://resistor-phi.vercel.app/"
            title="Resistor"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Resistor