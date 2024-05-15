import React from 'react'

const LymphaticSystem = () => {
    return (
        <div className='flex justify-center items-center h-screen'> 
        <iframe
            src="https://human-lymphaticsystem.vercel.app/"
            title="LymphaticSystem"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

        ></iframe>


        </div>
    )
}

export default LymphaticSystem