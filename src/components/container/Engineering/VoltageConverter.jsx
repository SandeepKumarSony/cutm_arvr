import React from 'react'

const VoltageConverter = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://stepdown-voltage-converter.vercel.app/"
            title="Voltage Converter"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default VoltageConverter