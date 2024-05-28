import React from 'react'

const Concretemixture = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://concretemixer-machine.vercel.app/"
            title="Concretemixture"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Concretemixture