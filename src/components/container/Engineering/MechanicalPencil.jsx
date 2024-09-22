import React from 'react'

const MechanicalPencil = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://mechanical-pencil.vercel.app/"
            title="Mechanical Pencil"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MechanicalPencil