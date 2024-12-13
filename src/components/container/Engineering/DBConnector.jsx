import React from 'react'

const DBConnector = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://db-9-connector.vercel.app/"
            title="DB9_Connector_Male"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default DBConnector