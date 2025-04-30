import React from "react";
import Animal from "./components/Animal";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello Vite!</h1>
      <Animal selectedAnimal="dog" />
    </div>
  );
}

export default App;
