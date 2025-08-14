import React from 'react'

const DnSocket = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://dn200-socket.vercel.app/"
            title="Dn-200 Socket"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default DnSocket