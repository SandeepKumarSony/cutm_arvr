import React from 'react'

const DcPowerSupply = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://dcpowersupply.vercel.app/"
            title="DC Regulated PowerSupply"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default DcPowerSupply