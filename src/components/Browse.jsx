import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpComming from '../hooks/useUpComming'

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpComming();
  return (
    <div>
     <Header/>
     <MainContainer/>
     <SecondaryContainer/>
     <div>
     </div>
    </div>
  )
}

export default Browse