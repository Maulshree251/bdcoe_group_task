import React from 'react'

const Trailer = () => {
  return (
    <div className="mt-[5%] ml-5 flex flex-col">
      <iframe
        height="360"
        width="640"
        src="https://www.youtube.com/embed/${}"
      ></iframe>
    </div>
  );
}

export default Trailer
