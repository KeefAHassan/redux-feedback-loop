import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Success() {
    const dispatch = useDispatch();
  const history =useHistory()
  return <div>
    <h1>Thank you!</h1>
    <button onClick={()=>{
        dispatch({
            type:"CLEAR_FEEDBACK"
        })
        history.push("/")
    }}>Leave New Feedback</button>
  </div>;
}

export default Success;
