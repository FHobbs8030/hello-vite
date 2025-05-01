import React from "react";
import "./App.css";
import Header from "./Header";
import Animal from "./Animal"; 

function App() {
  return (
    <div className="page">
      <Header />
      <Animal selectedAnimal="dog" />
    </div>
  );
}

export default App;
