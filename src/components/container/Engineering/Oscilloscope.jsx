import React from 'react'

const Oscilloscope = () => {
  return (
    <div className='flex justify-center items-center '>
        <iframe
            src="https://oscilloscope.vercel.app/"
            title="Oscilloscope"
            style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Oscilloscope