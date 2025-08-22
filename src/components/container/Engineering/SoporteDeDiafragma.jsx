import React from 'react'

const SoporteDeDiafragma = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://soporte-de-diafragma.vercel.app/"
            title="Soporte De Diafragma"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default SoporteDeDiafragma