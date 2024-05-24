import React from 'react'

const Multimeter = () => {
  return (
    <div className='flex justify-center items-center '>
        <iframe
            src="https://multimeter-sage.vercel.app/"
            title="Multimeter"
            style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default Multimeter