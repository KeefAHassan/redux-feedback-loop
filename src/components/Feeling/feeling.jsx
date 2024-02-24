import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Feeling() {
  const dispatch = useDispatch();
  const [feeling, setFeeling] = useState(0);
  const history =useHistory()
  return (
    <div className="container">
      <h1>How are you feeling today?</h1>
      <div className="content">
        <div className="input">
          <label htmlFor="feeling">Feeling?</label>
          <input
            type="number"
            name="feeling"
            value={feeling}
            onChange={(e) => setFeeling(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            dispatch({
              type: "ADD_FEELING",
              payload: feeling,
            });
            history.push("/understanding")

          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Feeling;
