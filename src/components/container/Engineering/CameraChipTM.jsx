import React from 'react'

const CameraChipTM = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://ov-2640-camera-chip-tm.vercel.app/"
            title="OV2640 Camera ChipTM"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default CameraChipTM