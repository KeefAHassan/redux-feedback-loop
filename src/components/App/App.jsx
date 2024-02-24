import { HashRouter as Router, Route } from "react-router-dom";

import React from "react";
import axios from "axios";
import "./App.css";
import Header from "../Header/header";
import Feeling from "../Feeling/feeling";
import Understanding from "../Understanding/understanding";
import Support from "../Support/support";
import Comments from "../Comments/comments";
import Review from "../Review/review";
import Success from "../Success/success";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact>
          <Feeling />
        </Route>
        <Route path="/understanding">
          <Understanding />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/success">
          <Success />
        </Route>



      </div>
    </Router>
  );
}

export default App;
