import React from 'react'

const AIRobotHand = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://ai-robot-hand.vercel.app/"
            title="AI Robot Hand"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default AIRobotHand