import React from 'react'

const SparkFunUSBCBreakout = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://spark-fun-usb-c-breakout.vercel.app/"
            title="Spark Fun USB-C Breakout"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SparkFunUSBCBreakout