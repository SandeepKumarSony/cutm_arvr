import React from 'react'

const CarJack = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://carjack.vercel.app/"
            title="Car Jack"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default CarJack