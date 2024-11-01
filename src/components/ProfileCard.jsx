import React from 'react'

function ProfileCard({data}) {
  return (
    
      <div className="flex flex-col p-5 bg-zinc-400 rounded-md gap-4 justify-center items-center w-72 h-fit flex-wrap">
        <div className="h-20 w-20 rounded-full  bg-zinc-500 overflow-hidden">
          <img src={data.image} alt="" className='h-full w-full object-cover'/>
        </div>
        <h3 className="font-bold"> {data.name} </h3>
        <h5 className="font-semibold text-xs text-zinc-700 ">
          {data.username}
        </h5>
        <p className="text-xs font-light leading-none text-zinc-600 ">
          {data.bio}
        </p>
      </div>
    
  );
}

export default ProfileCard
