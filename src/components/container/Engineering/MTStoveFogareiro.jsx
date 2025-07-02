import React from 'react'

const MTStoveFogareiro = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://mt-stove-fogareiro.vercel.app/"
            title="MT Stove Fogareiro"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MTStoveFogareiro