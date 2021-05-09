import "./Hero.css";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currImage, setCurrImage] = useState(0);

  const images = [
    "https://cdn.pixabay.com/photo/2015/05/15/14/50/concert-768722_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431_960_720.jpg"
  ]

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (currImage === 2) {
  //       setCurrImage(0);
  //     } else {
  //       setCurrImage(currImage + 1);
  //     }
  //   }, 5000)
  // }, [currImage])

  return (
    <div className = "hero-container" style = {{ backgroundImage: `url(${images[currImage]})`}}>
      {/* <img className = "hero-image" src = "https://cdn.pixabay.com/photo/2015/05/15/14/50/concert-768722_960_720.jpg" alt="Concert Pic" /> */}
    </div>
  )
}

export default Hero;