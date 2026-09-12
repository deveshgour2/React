import React from 'react'
import { Link } from 'react-router-dom'


const ReposCards = (props) => {
  return (
    <div className='bg-[#161B22] border border-[#30363D] rounded-xl p-3 flex justify-between w-[50vw] '  >
      
      <div className='flex flex-col gap-1'>
          <h1 className='text-lg font-bold'>{props.repo.name}</h1>
      <p className='text-sm '>{props.repo.description || "No description"}</p>
      </div>
      
        <div className=' flex flex-col items-center gap-1'>
         <div >
           <span>⭐{props.repo.stargazers_count}</span>
          <span>🍴{props.repo.forks_count}</span>
         </div>
          <div className='flex items-center'>
            <span>{props.repo.language || 'Unknown'}</span>
          </div>
   
      </div>

    </div>
  )
}

export default ReposCards
