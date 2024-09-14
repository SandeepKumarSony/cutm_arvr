import React from 'react'

BluetoothPCB = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://bluetooth-pcb.vercel.app/"
            title="Bluetooth PCB MH"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default BluetoothPCB