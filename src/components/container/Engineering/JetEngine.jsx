import React from 'react'

const JetEngine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://jet-engine-assembly.vercel.app/"
            title="Jet Engine Assembly"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default JetEngine