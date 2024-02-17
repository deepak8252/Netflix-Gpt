import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies);
  return (
    <div className='bg-black px-12'>
     <div className=' relative -mt-24 z-20'>
     <Movielist title={"now playing movies"} movie={movies?.nowplayingmovies}/>
      <Movielist title={"Popular movies"} movie={movies?.PopularMovies}/>
      <Movielist title={"UPComming movies"} movie={movies?.UpComming}/>
      <Movielist title={"Horror movie"} movie={movies?.nowplayingmovies}/>
     </div>
    </div>
  )
}

export default SecondaryContainer