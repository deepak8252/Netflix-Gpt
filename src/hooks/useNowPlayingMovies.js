import { useEffect } from "react"
import { addnowplayingmovies } from "../util/movieslice"
import { useDispatch } from "react-redux"

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
      fetchmovienow()
     
    
    },[])
    const fetchmovienow= async()=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1fa83ba4dc6ab80d7e77fe8fe67d1350&append_to_response=videos");
      const result= await data.json();
      // console.log(result)
      // setmovies(moviesdata?.results);
    //   console.log(moviesdata?.results[0].id)
    //   setmovies(result?.results);
      dispatch(addnowplayingmovies(result))
    }
}
export default useNowPlayingMovies;