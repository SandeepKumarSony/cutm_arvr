import React from 'react'

const GameController = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://game-controller-zeta.vercel.app/"
            title="Game Controller"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default GameController