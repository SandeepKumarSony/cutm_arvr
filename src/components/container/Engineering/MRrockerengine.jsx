import React from 'react'

const MRrockerengine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://mr-rocket-engine.vercel.app/"
            title="MR106L Rocket Engine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MRrockerengine