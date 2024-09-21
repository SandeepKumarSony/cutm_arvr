import React from 'react'

const WishboneSuspension = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://wishbone-suspension.vercel.app/"
            title="Wishbone Suspension"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default WishboneSuspension