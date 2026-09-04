import React from 'react'

const Cards = (props) => {
    return (
        <div className=" p-4  gap-6">
            <div className=" w-60 bg-white p-1 rounded-2xl relative">

                <div className="h-20 w-full rounded-2xl "
                style={{ backgroundImage: `url(${props.coverPicture})` }}
                >
                    
                    <button className="bg-white px-3 py-1 font-bold text-xs mt-2 absolute right-2 rounded-full">Follow +</button>
                </div>

                <div className="flex gap-2 items-center justify-center flex-col">

                    <div className="h-20 w-20 rounded-full absolute top-[16%] left-[33%] bg-cover bg-start"
                    style={{ backgroundImage: `url(${props.profile})` }}
                    >

                    </div>

                    <h1 className="text-xl font-bold  mt-13 leading-tight">{props.name} </h1>

                    <p className="text-[11px] text-center px-4 leading-tight text-gray-600">{props.bio}</p>
                </div>
                <div className=" w-full flex items-center justify-around mt-2 rounded-xl p-2  bg-gray-200">

                    <div className="flex items-center flex-col">
                        <h1 className=" text-[15px] font-bold leading-tight">{props.likes}</h1>
                        <p className="text-xs font-semibold text-gray-500">Likes</p>
                    </div>

                    <div className="flex items-center flex-col">
                        <h1 className=" text-[15px] font-bold leading-tight">{props.posts}</h1>
                        <p className="text-xs font-semibold text-gray-500">Posts</p>
                    </div>

                    <div className="flex items-center flex-col">
                        <h1 className=" text-[15px] font-bold leading-tight">{props.views}</h1>
                        <p className="text-xs font-semibold text-gray-500">Views</p>
                    </div>

                </div>
                <div className="flex justify-around items-center-safe mt-2 mb-3">
                    <i class="ri-instagram-line"></i>
                    <i class="ri-twitter-x-fill"></i>
                    <i class="ri-threads-line"></i>
                </div>
            </div>

        </div>
    )
}

export default Cards
