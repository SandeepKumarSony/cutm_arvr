import React from 'react'

const BTSpindel = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://bt-40-spindel.vercel.app/"
            title="BT40 Spindel"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default BTSpindel