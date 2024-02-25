import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Success() {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <h1>thank you!</h1>
      <button
        onClick={() => {
          dispatch({
            type: "CLEAR_FEEDBACK",
          });
          history.push("/");
        }}
        data-testid="next"
      >
        Leave New Feedback
      </button>
    </div>
  );
}

export default Success;
