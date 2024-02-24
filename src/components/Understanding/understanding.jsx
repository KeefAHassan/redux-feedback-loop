import React from "react";

function Understanding() {
  return  <div className="container">
  <h1>How well are you understanding the content?</h1>
  <div className="content">
    <div className="input">
      <label htmlFor="understanding">Understanding?</label>
      <input type="number" name="understanding" />
    </div>
    <button>Next</button>
  </div>
</div>;
}

export default Understanding;
