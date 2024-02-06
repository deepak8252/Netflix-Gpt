import { videolink } from '../util/constant';
import useTrailor from '../hooks/useTrailor';

const VideoBackground = ({id}) => {
  const trailorid=useTrailor(id);
  return (
    <div className='flex  mx-auto  bg-red-800 '>
        <iframe  className='w-screen aspect-video  ' src={videolink+trailorid} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground