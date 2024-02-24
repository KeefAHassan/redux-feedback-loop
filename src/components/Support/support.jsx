import React from "react";

function Support() {
  return <div className="container">
  <h1>How well are you being supported?</h1>
  <div className="content">
    <div className="input">
      <label htmlFor="support">Support?</label>
      <input type="number" name="support" />
    </div>
    <button>Next</button>
  </div>
</div>;
}

export default Support;
