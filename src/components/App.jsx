import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Animal from "./Animal"; // ✅ No need for Main anymore

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Animal selectedAnimal="dog" />
    </div>
  );
}

export default App;
