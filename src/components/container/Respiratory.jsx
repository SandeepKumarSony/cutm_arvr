import React from "react";

const Respiratory = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {" "}
      <iframe
        src="https://human-respiratorysystem1.vercel.app/"
        title="Respiratory"
        className='h-screen w-full'
        //style={{ width: "500px", height: "400px" }}
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
    </div>
  );
};

export default Respiratory;
