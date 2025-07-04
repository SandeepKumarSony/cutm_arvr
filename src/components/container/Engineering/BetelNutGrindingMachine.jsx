import React from 'react'

const BetelNutGrindingMachine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://betel-nut-grinding-machine.vercel.app/"
            title="Betel Nut Grinding Machine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default BetelNutGrindingMachine