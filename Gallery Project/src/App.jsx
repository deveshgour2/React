import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

    setUserData(response.data)

  }

  useEffect(() => {
    getData()
  }, [index])

  let printUserData = <h1 className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-gray-400 font-semibold'>Loading...</h1>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-44 w-48 overflow-hidden rounded-xl'>
            <img className='object-cover bg-center h-full w-full'
              src={elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-s p-1'>{elem.author}</h2>

        </a>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen overflow-auto p-4 text-white'>

      <div className='min-h-[90%] flex flex-wrap gap-5 p-2'>
        {printUserData}
      </div>

      <div className='flex items-center justify-center gap-5 mt-3  '>
        <button
          style={{ opacity: index == 1 ? 0.5 : 1, transform: index === 1 ? 'scale(1)' : 'scale(0.95)' }}
          className='bg-amber-400 px-4 py-1 rounded font-semibold cursor-pointer active:scale-95 text-black'
          onClick={
            () => {
              if (index > 1) {
                setIndex(index - 1)
                setUserData([])
              }
            }
          }
        ><u>prev</u>
        </button>

        <h4 className='text-s font-semibold'>Page {index}</h4>

        <button className='bg-amber-400 px-4 py-1 rounded font-semibold cursor-pointer active:scale-95 text-black'
          onClick={
            () => {
              setUserData([])
              setIndex(index + 1)
            }
          }
        ><u> next </u>
        </button>
      </div >
    </div >
  )
}

export default App
