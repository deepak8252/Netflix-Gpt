
import useTrailor from '../hooks/useTrailor';

const VideoBackground = ({id}) => {
  const trailorid=useTrailor(id);
  return (
    <div className='flex mx-auto min-h-screen absolute -z-40 top-0 w-full '>
        <iframe  className='w-screen lg:aspect-video md:aspect-video ' src={"https://www.youtube.com/embed/"+trailorid+"?autoplay=1&mute=1&enablejsapi=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground