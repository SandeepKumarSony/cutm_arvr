import React from 'react'

const BKSeuroLock = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://bks-euro-lock.vercel.app/"
            title="BKS EURO LOCK"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default BKSeuroLock