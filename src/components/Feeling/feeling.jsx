import React from "react";

function Feeling() {
  return (
    <div className="container">
      <h1>How are you feeling today?</h1>
      <div className="content">
        <div className="input">
          <label htmlFor="feeling">Feeling?</label>
          <input type="number" name="feeling" />
        </div>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Feeling;
