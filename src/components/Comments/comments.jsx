import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Comments() {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const history = useHistory();
  return (
    <div className="container">
      <h1>Any comments you want to leave?</h1>
      <div className="content">
        <div className="input">
          <label htmlFor="comments">Comments?</label>
          <input
            type="text"
            name="comments"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            dispatch({
              type: "ADD_COMMENT",
              payload: comment,
            });
            history.push("/review");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Comments;
