import React from "react";
import { data } from "../utils/constants.js";

function Animal({ selectedAnimal }) {
  const animal = data.find((item) => item.name === selectedAnimal);

  if (!animal) return <p>Animal not found</p>;

  return <img src={animal.image} alt={animal.name} />;
}

export default Animal;
