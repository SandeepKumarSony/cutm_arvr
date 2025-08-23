import React from 'react'

const SpiderRobot = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://spider-robot.vercel.app/"
            title="Spider Robot"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SpiderRobot