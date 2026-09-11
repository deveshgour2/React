import React from 'react'

const ReposCards = (props,idx) => {
  return (
    <div className='h-20 w-full p-3 '>
     {props.repo.avatar_url}
    </div>
  )
}

export default ReposCards
