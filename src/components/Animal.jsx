import React from "react";
import { data } from "../utils/constants";
import "./Animal.css"; 

function Animal({ selectedAnimal }) {
  const animal = data.find((item) => item.name === selectedAnimal);

  if (!animal) return <p>Animal not found</p>;

  return <img className="animal-image" src={animal.image} alt={animal.name} />;
}

export default Animal;
