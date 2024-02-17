import React from 'react'
import {img_url} from "../util/constant";

const MovieCard = ({img_path,movie}) => {
  
  return (
    <div className=''>
       <div className=' px-1   w-48'>
  <img src={img_url+img_path} alt="movie card" className='w-48 h-32' />
       </div>
       
    </div>
  )
}

export default MovieCard