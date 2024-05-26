import React from 'react'

const HumanBrain = () => {
    return (
        <div className='flex justify-center items-center h-screen'>

            <iframe
                src="https://humanbrain-psi.vercel.app/"
                title="HumanBrain"
                className='h-screen w-full'
                //style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>
        </div>
    )
}

export default HumanBrain