import React from 'react'

const SectionValve = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://section-valve.vercel.app/"
            title="Section Valve"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SectionValve