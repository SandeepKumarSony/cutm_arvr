import React from 'react'

const FrontFrameTrackingFixture = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://front-frame-tracking-fixture-a01.vercel.app/"
            title="Front Frame Tracking Fixture"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default FrontFrameTrackingFixture