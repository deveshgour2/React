import React, { useState } from 'react'
import axios from "axios";
import ReposCards from './components/ReposCards';
import FollowerCard from './components/FollowerCard';
import FollowingCards from './components/FollowingCards';

const App = () => {
  const [username, setUsername] = useState('')
  const [data, setData] = useState('')
  const [repos, setRepos] = useState([])
  const [follower, setFollower] = useState([])
  const [following, setFollowing] = useState([])
  const [showRepos, setShowRepos] = useState(false)
  const [showFollowers, setshowFollowers] = useState(false)
  const [showFollowings, setShowFollowings] = useState(false)

  const getData = async () => {
    let response = await axios.get(`https://api.github.com/users/${username}`)
    const data = response.data
    setData(data)

  }

  const repoData = async () => {
    let response = await axios.get(`https://api.github.com/users/${username}/repos`)
    const data = response.data
    setRepos(data)
  }

  const followerData = async () => {
    let response = await axios.get(`https://api.github.com/users/${username}/followers`)
    const data = response.data
    setFollower(data)
  }


  const followingData = async () => {
    let response = await axios.get(`https://api.github.com/users/${username}/following`)
    const data = response.data
    setFollowing(data)
  }

  function formHandler(e) {
    e.preventDefault()
    getData()
    setUsername('')
    repoData()
    followerData()
    followingData()
  }


  return (
    <div className='bg-black min-h-screen w-full text-white p-1 flex items-center flex-col gap-2'>
      {!showRepos && !showFollowers && !showFollowings && (
        <>
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
        </>
      )}

      {data && !showRepos && !showFollowers && !showFollowings && (

        <div className=' w-60 bg-[#161B22] border border-[#30363D] flex flex-col rounded p-2 items-center text-white mt-5 gap-1'>
          <img
            src={data.avatar_url}
            alt={data.login}
            className='h-17 w-17 rounded-full mb-2' />

          <h1 className='text-lg font-semibold '>{data.name}</h1>
          <h4 className='text-sm  leading-tight mb-1'>@{data.login}</h4>
          <p className='text-[10px] text-wrap font-light '>{data.bio}</p>

          <div className='flex justify-around gap-5 items-center '>
            <div className='text-xs font-medium leading-tight flex flex-col items-center '>
              Followers
              <button
                className='cursor-pointer'
                onClick={() => {
                  setshowFollowers(!showFollowers)
                }}
              >
                {data.followers}
              </button >
            </div>

            <div className='text-xs font-medium leading-tight flex flex-col items-center '>
              Following
              <button className=' cursor-pointer '
                onClick={() => {
                  setShowFollowings(!showFollowings)
                }}
              >
                {data.following}
              </button>
            </div>

            <div className='text-xs font-medium leading-tight flex flex-col items-center '>
              Repositories
              <button
                className='cursor-pointer '
                onClick={() => setShowRepos(!showRepos)}>
                {data.public_repos}
              </button>
            </div>
          </div>

          <a href={data.html_url}
            target='_blank'
            className='bg-blue-500 text-white text-xs mt-2 rounded px-3 py-1 active:scale-95 cursor-pointer'> View Github Profile</a>

        </div>
      )}


      {showRepos && !showFollowers && !showFollowings && (

        <div >

          <div className='flex justify-between mt-3'>
            <h1 className='text-2xl font-bold  mb-6'>
            Repositories
          </h1>

          <button
            onClick={() => setShowRepos(false)}
            className='bg-gray-700 px-4  rounded text-sm mb-5'
          >
            ← Back
          </button>
          </div>

          <div className='w-full max-w-3xl flex flex-col gap-3'>

            {repos.map((repo) => (
              <ReposCards
                key={repo.id}
                repo={repo}
              />
            ))}

          </div>

        </div>

      )}

      {
        showFollowers && !showFollowings && (
          <div >
           <div  className='flex justify-between mt-3'>
             <h1 className='text-2xl font-bold  mb-6'>
              Followers
            </h1>

            <button
              className='bg-gray-700 px-4 py-2 rounded text-sm mb-5'
              onClick={() => setshowFollowers(false)}
            >
              ← Back
            </button>
           </div>
            <div className='w-full max-w-3xl flex flex-col gap-3'>
              {
                follower.map((follower) => (
                  <FollowerCard
                    key={follower.id}
                    follower={follower}
                  />
                ))
              }
            </div>
          </div>
        )
      }
      {
        showFollowings && (
          <div>
            <div  className='flex justify-between mt-3'>
              <h1
              className='text-2xl font-bold  mb-6'>
              Followings
            </h1>
            <button
              className='bg-gray-700 px-4 py-2 rounded text-sm mb-5'
              onClick={() => setShowFollowings(false)}>
              ← Back
            </button>
            </div>

            <div className='w-full max-w-3xl flex flex-col gap-3'>
              {
                following.map((following) => (
                  <FollowingCards
                    key={following.id}
                    following={following} />
                ))
              }
            </div>
          </div>

        )
      }
    </div>
  )
}

export default App
