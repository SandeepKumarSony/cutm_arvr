import React from 'react'

const WarthogQRAssembly = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://warthog-qr-assembly.vercel.app/"
            title="Warthog_QR Assembly"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default WarthogQRAssembly