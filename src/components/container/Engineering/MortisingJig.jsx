import React from 'react'

const MortisingJig = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://mortising-jig.vercel.app/"
            title="Mortising Jig"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MortisingJig