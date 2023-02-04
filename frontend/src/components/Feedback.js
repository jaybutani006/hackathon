import React, {useState} from 'react'
import { Rating } from "@material-ui/lab";
import './Feedback.css'
import { createFeedback } from '../actions/userAction';
import { useDispatch } from "react-redux";
import Header from './Header';

function Feedback() {
    const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
    const options = {
      size: "large",
      value: 0,
      readOnly: true,
      precision: 0.5,
  };
  const feebackSubmit = (e) => {
    e.preventDefault();
    console.log(comment)
    console.log(rating)
    dispatch(createFeedback(comment, rating));
    setComment("");
    setRating(0);
  };
    
  return (
    <>
      <Header />
      <div className="container">
        <form className='fr' action="" onSubmit={feebackSubmit}>
          <p className="tx">Comments:</p>
          <textarea
            name="comment"
            id="comment"
            cols="100"
            rows="10"
            value={comment}
            placeholder="Write your feedback here"
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <br />
          <p className="tx">Rating:</p>
          <Rating
            options={options}
            className="meetClass"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            size="large"
          />
          <button type="submit" className="botton btn btn-primary sub">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Feedback
