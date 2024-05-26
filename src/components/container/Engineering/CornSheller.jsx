import React from 'react'

const CornSheller = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://com-sheller-machine.vercel.app/"
            title="CornSheller"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default CornSheller