import React, {useState} from 'react'
import { Rating } from "@material-ui/lab";
import './Feedback.css'
import { createFeedback, updateFeedbackCount, updatePoints } from '../actions/userAction';
import { useDispatch, useSelector } from "react-redux";
import Header from './Header';

function Feedback({user}) {
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
    const options = {
      size: "large",
      value: 0,
      readOnly: true,
      precision: 0.5,
  };
  const feebackSubmitClick = (e) => {
    e.preventDefault();
    console.log(comment)
    console.log(rating)
    let newPoints = user.points + 2;
    dispatch(updatePoints(user._id, newPoints));
    dispatch(createFeedback(comment, rating));
    dispatch(updateFeedbackCount(user._id));
    setComment("");
    setRating(0);
  };
  const feedbackAble = user.submitFeedback === 0 ? true : false;
  return (
    <>
      <Header user={user} />
      {feedbackAble ? (
        <div className="container">
          <form className="fr" action="" onSubmit={feebackSubmitClick}>
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
      ) : (
        <div className="feedbackSuccess">
          <h1>Your Today's Feedback is Recorded Successfully.</h1>
        </div>
      )}
    </>
  );
}

export default Feedback
