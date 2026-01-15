import React from 'react'

const Embrague = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://embrague.vercel.app/"
            title="Embrague"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Embrague