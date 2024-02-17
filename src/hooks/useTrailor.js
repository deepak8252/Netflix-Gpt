import { useEffect } from "react";
import { addTrailor } from "../util/movieslice";
import { useDispatch, useSelector } from "react-redux";

const useTrailor=(id)=>{
    const trailorid=useSelector((store)=>store?.movies?.nowTailor?.key);
    const dispatch=useDispatch();
    const fetchdata=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+id+"videos?api_key=1fa83ba4dc6ab80d7e77fe8fe67d1350&append_to_response=videos");
        const result= await data.json();
        // console.log(result);
           const filterData=result?.videos?.results?.filter((video)=>video?.type==="Trailer");
           if (filterData && filterData.length > 0) {
            const trailer = filterData[0];
            dispatch(addTrailor(trailer));
            
        } 
        // console.log(result?.videos,"hello");
        // console.log(trailorid)
    }
    useEffect(()=>{
        fetchdata();
    },[])
    return trailorid
}
export default useTrailor

