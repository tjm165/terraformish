import { useState } from "react";
import { TfGenerator } from "./components";
import "./App.css";
import { Header } from "./components/static";

function App() {
  const [shouldRefetch, setShouldRefetch] = useState("default");

  return (
    <div className="App">
      <Header shouldRefetch={shouldRefetch} />
      <TfGenerator setShouldRefetch={setShouldRefetch} />
    </div>
  );
}

export default App;
