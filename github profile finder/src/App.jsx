import React, { useState } from 'react'
import axios from "axios";
import ReposCards from './components/ReposCards';

const App = () => {
  const [username, setUsername] = useState('')
  const [data, setData] = useState('')
  const [repos, setRepos] = useState([])
  const [follower, setFollower] = useState([])
  const [following, setFollowing] = useState([])
  const [showRepos, setShowRepos] = useState(false)

  const getData = async () => {
    let response = await axios.get(`https://api.github.com/users/${username}`)
    const data = response.data
    setData(data)
    setUsername('')
  }

  const repoData = async () => {
    let response = await axios.get(`https://api.github.com/users/${username}/repos`)
    const data = response.data
    console.log(data);
    
    setRepos(data)
  }

  const followerData = async () => {
    let response = await axios.get(`https://api.github.com/users/${username}/followers`)
    const data = response.data
    setFollower(data)
  }


  const followingData = async () => {
    let response = await axios.get( `https://api.github.com/users/${username}/following`)
    const data = response.data
   console.log(data);
   
  }

  function formHandler(e) {
    e.preventDefault()
    getData()
    repoData()
    followerData()
    followingData()
  }


  return (
    <div className='bg-black min-h-screen w-full text-white p-1 flex items-center flex-col gap-2'>
      <h1 className='uppercase mt-1 font-bold text-lg '>Github Profile Finder</h1>
      <form onSubmit={(e) => {
        formHandler(e)
      }}>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)

          }}
          className='text-sm rounded border px-5 py-1 outline-none font-semibold'
          type="text"
          placeholder='Enter Username' />

        <button
         
          className='bg-green-500 px-5 py-1 rounded m-2 text-sm '
        >Search
        </button>

      </form>

      {data && (

        <div className=' w-50 bg-[#161B22] border border-[#30363D] flex flex-col rounded p-2 items-center text-white mt-5'>
          <img
            src={data.avatar_url}
            alt={data.login}
            className='h-15 w-15 rounded-full mb-2' />

          <h1 className='text-sm font-semibold '>{data.name}</h1>
          <h4 className='text-xs  leading-tight mb-1'>@{data.login}</h4>
          <p className='text-[10px] text-wrap font-light '>{data.bio}</p>

          <div className='flex justify-around gap-2 mt-1'>
            <div className='text-[11px] font-medium leading-tight flex flex-col items-center '>
              Followers
              <h6 className='text-[10px] leading-tight font-medium'>{data.followers}</h6>
            </div>

            <div className='text-[11px] font-medium leading-tight flex flex-col items-center '>
              Following
              <h6 className='text-[10px] leading-tight font-medium'>{data.following}</h6>
            </div>

            <div className='text-[11px] font-medium leading-tight flex flex-col items-center '>
              Repositories
             <button onClick={()=> setShowRepos(!showRepos)}>
              {data.public_repos}
             </button>
            </div>
          </div>

          <a href={data.html_url}
            target='_blank'
            className='bg-blue-500 text-white text-xs mt-2 rounded px-3 py-1 active:scale-95 cursor-pointer'> View Github Profile</a>

        </div>
      )}

      {
        showRepos && repos.map(function(repo,idx){
          return <div key={idx}>
            <ReposCards repo = {repo} idx={idx}/>
          </div>
        })
      }
      
    </div>
  )
}

export default App
