import React from "react";
import logo from "./logo.svg";
import { TfGenerator } from "./components";
import "./App.css";
import { NavBar } from "./components/static";

function App() {
  return (
    <div className="App">
      <NavBar />
      <TfGenerator />
    </div>
  );
}

export default App;
