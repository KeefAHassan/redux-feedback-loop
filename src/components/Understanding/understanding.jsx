import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Understanding() {
  const dispatch = useDispatch();
  const [understanding, setUnderstanding] = useState(0);
  const history = useHistory();

  return (
    <div className="container">
      <h1>How well are you understanding the content?</h1>
      <div className="content">
        <div className="input">
          <label htmlFor="understanding">Understanding?</label>
          <input
            type="number"
            name="understanding"
            value={understanding}
            onChange={(e) => setUnderstanding(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            dispatch({
              type: "ADD_UNDERSTANDING",
              payload:understanding ,
            });
            history.push("/support");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Understanding;
