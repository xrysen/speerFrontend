import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"

const Review = (props) => {
  return (
    <div className = "review-container">
      <FontAwesomeIcon icon = {faStar} size = "2x" />
      <FontAwesomeIcon icon = {faStar} size = "2x" />
      <FontAwesomeIcon icon = {faStar} size = "2x" />
      <FontAwesomeIcon icon = {faStar} size = "2x" />
      <FontAwesomeIcon icon = {faStar} size = "2x" />
      <h2 className = "review-title">{props.title}</h2>
      <p className = "review-quote">"{props.quote}"</p>
    </div>
  )
}

export default Review;