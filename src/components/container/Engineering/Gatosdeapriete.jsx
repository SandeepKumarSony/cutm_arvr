import React from 'react'

const Gatosdeapriete = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://gatos-de-apriete.vercel.app/"
            title="Gatos de apriete"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Gatosdeapriete