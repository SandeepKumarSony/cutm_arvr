import React from 'react'

const AnprcRadio = () => {
  return (
    <div className='flex justify-center items-center '>
        <iframe
            src="https://anprc-radio.vercel.app/"
            title="AnprcRadio"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default AnprcRadio