import React from 'react'

const LakeCleaningMachine = () => {
  return (
    <div className='flex justify-center items-center'>
         <iframe
            src="https://lake-cleaning-machine.vercel.app/"
            title="Lake Cleaning Machine"
            className='h-screen w-full'
            //style={{ width: "500px", height: "400px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"

          ></iframe>

    </div>
  )
}

export default LakeCleaningMachine