import { useState } from "react";
import "./App.css";
import User from "./components/User/User";

function App() {
  const [familiar, setFamiliar] = useState(false);
  return (
    <div className="App">
      <h1>Is Familiar: {familiar.toString()}</h1>
      <button
        style={{
          border: "none",
          padding: "12px 30px",
          backgroundColor: "orangered",
          color: "white",
          fontSize: "18px",
          fontWeight: "600",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setFamiliar(!familiar)}
      >
        Toggle
      </button>
      <User familiar={familiar}></User>
    </div>
  );
}

export default App;
