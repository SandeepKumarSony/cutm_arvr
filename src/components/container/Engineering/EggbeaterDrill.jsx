import React from 'react'

const EggbeaterDrill = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://eggbeater-drill.vercel.app/"
            title="Eggbeater Drill"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default EggbeaterDrill