import React from 'react'

const HorseSkeleton = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <iframe
                src="https://humanear1-qp85rd5fw-centurion1.vercel.app/"
                title="HorseSkeleton"
                style={{ width: "1000px", height: "700px" }}
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"

            ></iframe>

        </div>
    )
}

export default HorseSkeleton