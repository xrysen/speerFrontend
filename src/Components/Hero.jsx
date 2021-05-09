import "./Hero.css";
import { useEffect, useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

const Hero = () => {
  const [currImage, setCurrImage] = useState(2);

  const images = [
    "https://cdn.pixabay.com/photo/2015/05/15/14/50/concert-768722_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431_960_720.jpg",
  ];

  return (
    <CarouselProvider totalSlides={3} naturalSlideWidth={100}
    naturalSlideHeight={125}>
      <Slider>
        <Slide index={0}><img src = {images[0]} alt="Carousel"/></Slide>
        <Slide index={1}><img src = {images[1]} alt="Carousel"/></Slide>
        <Slide index={2}><img src = {images[2]} alt="Carousel"/></Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default Hero;
