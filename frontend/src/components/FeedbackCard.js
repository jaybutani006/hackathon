import React from 'react'
import { Rating } from "@material-ui/lab";

function FeedbackCard({ feedback }) {
    const options = {
      value: feedback.ratings,
      readOnly: true,
      precision: 0.5,
    };

  return (
    <div className = "reviewCard" >
      <Rating {...options} />
      <span className="reviewCardComment" > {feedback.comment}
        </span>
      </div>
    );
}

export default FeedbackCard;