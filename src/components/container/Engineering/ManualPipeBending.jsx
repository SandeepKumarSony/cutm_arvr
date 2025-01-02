import React from 'react'

const ManualPipeBending = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://manual-pipe-bending-hydraulic-machine.vercel.app/"
            title="Manual Pipe Bending Hydraulic Machine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ManualPipeBending