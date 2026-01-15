import React from 'react'

const SpringChannelConnectionTool = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://spring-channel-connection-tool-lhjs.vercel.app/"
            title="Spring Channel Connection Tool"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SpringChannelConnectionTool