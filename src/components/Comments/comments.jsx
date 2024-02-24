import React from "react";

function Comments() {
  return  <div className="container">
  <h1>Any comments you want to leave?</h1>
  <div className="content">
    <div className="input">
      <label htmlFor="comments">Comments?</label>
      <input type="text" name="comments" />
    </div>
    <button>Next</button>
  </div>
</div>;
}

export default Comments;
