import React from 'react'

const VideoTitle = ({title,overview}) => {
  
  return (
    <div className=' w-full h-screen sm:px-10 lg:px-32 md:px-32 pt-[5%] relative  aspect-video bg-gradient-to-r from-black text-white'>
        <h1 className='md:text-6xl sm:px-4 px-2 lg:text-6xl  sm:text-4xl font-bold'>{title}</h1>
        <p className='py-5 md:w-1/4 lg:w-1/4 sm:w-9/12 text-justify px-5'>{overview}</p>
        <div className='my-4'>
            <button className='border bg-white text-black p-2 capitalize font-semibold shadow-lg rounded-lg hover:opacity-50'>play now ▶️</button>
            <button className='border mx-2 font-semibold bg-opacity-55 bg-gray-500 p-2 capitalize rounded-lg text-white'>more info</button>
        </div>
    </div>
  )
}

export default VideoTitle