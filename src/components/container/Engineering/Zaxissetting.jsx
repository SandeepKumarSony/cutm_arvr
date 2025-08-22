import React from 'react'

const Zaxissetting = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://z-axis-setting.vercel.app/"
            title="Z axis setting"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Zaxissetting