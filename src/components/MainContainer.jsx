import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowplayingmovies);
    if(!movies )
        return null;
    
        const mainMovies=movies.results[9];
        // console.log(mainMovies);
    const { original_title,overview, id} =mainMovies  
    console.log(id ,"main")
  return (
    <>
        <div className=' mx-auto pb-0'>
        <VideoTitle title={original_title} overview={overview} />
         <VideoBackground id={id}/>
        </div>
    </>
  )
}

export default MainContainer