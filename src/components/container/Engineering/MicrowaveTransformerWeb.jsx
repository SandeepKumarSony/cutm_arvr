import React from 'react'

const MicrowaveTransformerWeb = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://microwavetransformer-web.vercel.app/"
            title="Microwave Transformer Web"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MicrowaveTransformerWeb