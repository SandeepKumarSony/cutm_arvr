import React from 'react'

const USBConnector = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://usbc-connector.vercel.app/"
            title="USB C Connector"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default USBConnector