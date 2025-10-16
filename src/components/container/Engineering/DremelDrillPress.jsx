import React from 'react'

const DremelDrillPress = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://dremel-drill-press.vercel.app/"
            title="Dremel Drill Press"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default DremelDrillPress