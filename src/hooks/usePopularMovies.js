import { useEffect } from "react"
import { addPopularMovies} from "../util/movieslice"
import { useDispatch } from "react-redux"

const usePopularMovies=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
      fetchmovienow()
     
    
    },[])
    const fetchmovienow= async()=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=1fa83ba4dc6ab80d7e77fe8fe67d1350&append_to_response=videos");
      const result= await data.json();
      dispatch(addPopularMovies(result))
    }
}
export default usePopularMovies;