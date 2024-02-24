import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function Support() {
    const dispatch = useDispatch();
    const [support, setSupport] = useState(0);
    const history =useHistory()
  return <div className="container">
  <h1>How well are you being supported?</h1>
  <div className="content">
    <div className="input">
      <label htmlFor="support">Support?</label>
      <input type="number" name="support" value={support}
            onChange={(e) => setSupport(e.target.value)} />
    </div>
    <button onClick={() => {
            dispatch({
              type: "ADD_SUPPORT",
              payload: support,
            });
            history.push("/comments")

          }}>Next</button>
  </div>
</div>;
}

export default Support;
