import React from 'react'

const RicePeeler = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://rice-peeler.vercel.app/"
            title="RicePeeler"
            style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default RicePeeler