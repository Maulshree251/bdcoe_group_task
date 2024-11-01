import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ProfileCard from './ProfileCard';
import { data } from 'autoprefixer';

function MakeProfile() {
  const[val, setVal]= useState({name:"Name", username:"Username", bio:"Heyy", image: ""})


  const handleSubmit = (event)=>{
    event.preventDefault();
    
  }
  return (
    <div className="flex flex-col justify-center items-center gap-7 p-5 mt-[10%]">
      <ProfileCard data={val}/>
                                                                       
      <form
        action=""
        className="flex gap-3 max-h-7"
        onSubmit={handleSubmit}
      >
        
        
        <input
          className="px-3 py-2 rounded-md border-none outline-none text-xs font-semibold"
          type="text"
          name=""
          id=""
          placeholder="Full Name"
          onChange={(event)=>setVal({...val, name: event.target.value})}
        />
        <input
          className="px-3 py-2 rounded-md border-none outline-none text-xs font-semibold"
          type="text"
          name=""
          id=""
          placeholder="Username"
          onChange={(event)=>setVal({...val, username: event.target.value})}
        />
        <textarea
          className="px-3 py-2 rounded-md border-none outline-none text-xs font-semibold"
          type="text"
          name=""
          id=""
          placeholder="Bio"
          onChange={(event)=>setVal({...val, bio: event.target.value })}         
        />
        <input
          className="px-3 py-2 rounded-md border-none outline-none text-xs font-semibold"
          type="text"
          name=""
          id=""
          placeholder="Image URL"
          onChange={(event)=>setVal({...val, image: event.target.value })} 
        />
        <input
          type="submit"
          value="submit"
          className="px-3 py-1 bg-blue-600 text-white font-semibold rounded-md"
        />
      </form>
    </div>
  );
}

export default MakeProfile
