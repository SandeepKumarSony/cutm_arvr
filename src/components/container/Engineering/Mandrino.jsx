import React from 'react'

const Mandrino = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://mandrino.vercel.app/"
            title="Mandrino"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Mandrino