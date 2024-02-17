import React from 'react'
import MovieCard from './MovieCard'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  className: "center",
  centerMode: false,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};
const Movielist = ({title,movie}) => {
    console.log(movie)
  return (
   
    <div className=' '>
      <div className='-mt-5 py-2'>
        <h1 className='py-4 px-3 capitalize text-white font-bold sm:text-xl md:text-2xl lg:text-2xl'>{title}</h1>
      <div className=' w-5/6 mx-auto'>
    
         <Slider {...settings}>
          {
          movie?.results.map((item)=>(
            <MovieCard img_path={item.backdrop_path}/> 
          ))
       
        }
           </Slider>
      </div>
      </div>
    </div>
  )
}

export default Movielist