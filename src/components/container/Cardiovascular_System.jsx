import React from 'react'

const Cardio = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <iframe
                src="https://cardio-eight.vercel.app/"
                title="Heart"
                style={{ width: "1000px", height: "700px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>

        </div>
    )
}

export default Cardio