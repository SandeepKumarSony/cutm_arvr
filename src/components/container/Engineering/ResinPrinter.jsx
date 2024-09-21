import React from 'react'

const ResinPrinter = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://resin-printer.vercel.app/"
            title="Resin Printer"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ResinPrinter