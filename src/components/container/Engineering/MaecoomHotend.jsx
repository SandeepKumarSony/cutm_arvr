import React from 'react'

const MaecoomHotend = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://meacoom-hotend.vercel.app/"
            title="Maecoom Hotend"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default MaecoomHotend