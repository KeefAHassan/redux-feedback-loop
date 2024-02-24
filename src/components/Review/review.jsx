import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Review() {
    const feedback = useSelector((state)=> state.feedback)
    const history = useHistory()
    const submit = () => {

        
        axios({
            method: 'POST',
            url: '/api/feedback',
            data: feedback
        }).then(response => {
           
            history.push('/success');
        }).catch(error => {
            console.log('Error sending order', error);
        });
    }
  return (
    <div>
      <h1>Review your Feedback</h1>
      <p>Feeling:{feedback.feeling}</p>
      <p>Understanding:{feedback.understanding}</p>
      <p>Support:{feedback.support}</p>
      <p>Comment:{feedback.comment}</p>
      <button onClick={()=> submit()} data-testid="next">submit</button>
    </div>
  );
}

export default Review;
