import React from 'react'

const JoystcikRB = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://joystcik-rb-400.vercel.app/"
            title="JoystcikRB400"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default JoystcikRB