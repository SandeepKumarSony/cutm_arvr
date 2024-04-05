import React from 'react'

const LSUDryer= () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://lsu-dryer-tawny.vercel.app/"
            title="LSUDryer"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default LSUDryer