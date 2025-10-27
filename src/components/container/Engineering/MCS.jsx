import React from 'react'

const MCS = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://mcs-self.vercel.app/"
            title="Missile Carrying Satellite"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MCS