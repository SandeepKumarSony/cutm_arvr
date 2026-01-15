import React from 'react'

const RoboDog = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://robo-dog.vercel.app/"
            title="Robo Dog"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default RoboDog