import React from 'react'

const NovaBot = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://nova-bot-iota.vercel.app/"
            title="Nova Bot"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default NovaBot