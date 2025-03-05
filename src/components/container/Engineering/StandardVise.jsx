import React from 'react'

const StandardVise = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://standard-vise.vercel.app/"
            title="Standard Vise"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}
D
export default StandardVise