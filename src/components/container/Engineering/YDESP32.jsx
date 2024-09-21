import React from 'react'

const YDESP32 = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://yd-esp-32.vercel.app/"
            title="YD ESP-32"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default YDESP32