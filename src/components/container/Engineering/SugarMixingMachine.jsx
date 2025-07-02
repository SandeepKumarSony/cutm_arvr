import React from 'react'

const SugarMixingMachine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://sugar-mixing-machine.vercel.app/"
            title="Sugar Mixing Machine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SugarMixingMachine