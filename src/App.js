import React from "react";
import "./App.css";
import OpenProfile from "./Components/OpenProfile/OpenProfile";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {" "}
        <header>Header</header>
        <section>
          <Route exact path={"/"} render={() => <OpenProfile />} />
        </section>
        <footer>Footer</footer>
      </Router>
    </div>
  );
}

export default App;
