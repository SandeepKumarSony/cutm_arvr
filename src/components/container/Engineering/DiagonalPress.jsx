import React from 'react'

const DiagonalPress = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://diagonal-press.vercel.app/"
            title="Diagonal Press"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default DiagonalPress