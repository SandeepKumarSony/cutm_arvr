import React from 'react'

const RibbonMixer = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://ribbon-mixer-machine.vercel.app/"
            title="Ribbon Mixer Machine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default RibbonMixer