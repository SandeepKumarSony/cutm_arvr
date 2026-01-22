import React from 'react'

const MastrenaCoffeeMachine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://mastrena-coffee-machine.vercel.app/"
            title="Mastrena Coffee Machine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MastrenaCoffeeMachine