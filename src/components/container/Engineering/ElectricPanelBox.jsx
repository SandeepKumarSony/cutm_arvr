import React from 'react'

const ElectricPanelBox = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://electric-panel-box.vercel.app/"
            title="Electric Panel Box"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default ElectricPanelBox