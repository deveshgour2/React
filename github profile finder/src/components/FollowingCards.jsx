import React from 'react'

const FollowingCards = (props) => {
   return (
        <div className='bg-[#161B22]  border border-[#30363D] rounded-xl p-4  
     flex gap-10  w-[30vw] justify-between ' >
            <img src={props.following.avatar_url}
                alt=""
                className='h-15 w-15 rounded-full'
            />
            <div className='flex flex-col justify-between'>
                <h1 className='text-lg '>{props.following.login}</h1>
               <a 
               href={props.following.html_url}
               target='_blank'
                   className='bg-green-600 text-white text-xs rounded px-3 py-1 active:scale-95 '
               >
                View Profile
               </a>
            </div>
        </div>
    )
}

export default FollowingCards
