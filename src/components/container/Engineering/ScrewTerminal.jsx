import React from 'react'

const ScrewTerminal = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://screw-terminal.vercel.app/"
            title="Screw Terminal"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ScrewTerminal