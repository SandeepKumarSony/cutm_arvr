import React from 'react'

const HearAnatomy = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <iframe
                src="https://hunam-heart.vercel.app/"
                title="Heart"
                className='h-screen w-full'
                //style={{ width: "500px", height: "400px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>

        </div>
    )
}

export default HearAnatomy