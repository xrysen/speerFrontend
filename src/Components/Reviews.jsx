import "./Reviews.css";
import TopNav from "./TopNav";
import speakers from "../assets/speakers2.png";
import Review from "./Review";

const Reviews = () => {
  return (
    <div className="reviews-container">
      <TopNav bgColour="#1FE1E9" liColour="blue-li" />
      <h1 className="review-header">REVIEWS</h1>
      <div className="reviews-content">
        <img style = {{ position: "relative", bottom: "80px"}} src={speakers} alt="Speakers"  />
        <Review title = "ARTIST" quote = "Love it, it's the Best. I can't live without it!" />
        <Review title = "PRODUCER" quote = "Love it, it's the Best. I can't live without it!" />
        <Review title = "MUSIC FAN" quote = "Love it, it's the Best. I can't live without it!" />
      </div>
    </div>
  );
};

export default Reviews;
