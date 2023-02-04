import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllFeedbacks } from '../actions/userAction';
import FeedbackCard from './FeedbackCard';
import './AdminFeedback.css'
import AdminHeader from './AdminHeader';
function AdminFeedback() {
    const dispatch = useDispatch();
    const { feedback } = useSelector(
      (state) => state.feedback
    );
  useEffect(() => {
    const fun = async () => {
      dispatch(getAllFeedbacks());
    }
    fun();
    }, []);
  return (
    <>
      <AdminHeader />
      <div>
        {feedback && feedback[0] ? (
          <div className="reviews">
            {feedback &&
              feedback.map((feedback) => (
                <FeedbackCard key={feedback._id} feedback={feedback} />
              ))}
          </div>
        ) : (
          <p className="noReviews">No Feedback Yet</p>
        )}
      </div>
    </>
  );
}

export default AdminFeedback
