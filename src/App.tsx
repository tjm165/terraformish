import React from "react";
import logo from "./logo.svg";
import { TfGenerator } from "./components";
import "./App.css";
import { Header } from "./components/static";

function App() {
  return (
    <div className="App">
      <Header />
      <TfGenerator />
    </div>
  );
}

export default App;
