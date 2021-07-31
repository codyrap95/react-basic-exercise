import Counter from "./components/Counter";
import React from "react";
import "./App.css";
import RandomUser from "./components/RandomUser";

function App() {
  return (
    <React.Fragment>
      <Counter />
      <RandomUser />
    </React.Fragment>
  );
}

export default App;
