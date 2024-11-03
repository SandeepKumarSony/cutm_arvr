import React from 'react'

const DisplayST = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://display-st-7789-v2.vercel.app/"
            title="Display_ST7789V2"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default DisplayST