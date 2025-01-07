import React from 'react'

const QuickCharger = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://quick-charge-tps-61088-boost-module.vercel.app/"
            title="Quick Charger TPS61088"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default QuickCharger