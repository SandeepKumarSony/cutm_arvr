import React from 'react'

const ClutchHousingCover = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://clutch-housing-cover.vercel.app/"
            title="Clutch Housing Cover"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ClutchHousingCover