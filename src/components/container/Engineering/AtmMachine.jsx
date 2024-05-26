import React from 'react'

const AtmMachine = () => {
  return (
    <div className='flex justify-center items-center '>
        <iframe
            src="https://atm-machine-iota.vercel.app/"
            title="Atm Machine"
            style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default AtmMachine