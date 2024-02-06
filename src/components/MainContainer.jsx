import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowplayingmovies);
    if(!movies )
        return null;
    
        const mainMovies=movies.results[0];
        console.log(mainMovies);
    const { original_title,overview, id} =mainMovies  
  return (
    <>
        <div className=' mx-auto'>
        <VideoTitle title={original_title} overview={overview} id={id}/>
         <VideoBackground/>
        </div>
    </>
  )
}

export default MainContainer