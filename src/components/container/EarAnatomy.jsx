import React from 'react'

const EarAnatomy = () => {
    return (
        <div className='flex justify-center items-center h-screen'> <iframe
            src="https://humanear-eta.vercel.app/"
            title="Ear"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

        ></iframe>


        </div>
    )
}

export default EarAnatomy