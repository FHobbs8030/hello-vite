import { data } from "../utils/constants.js";

// selectedAnimal is a string, such as "cat", "dog", etc.
function Animal({ selectedAnimal }) {
  // Find the first animal that matches selectedAnimal.
  const animal = data.find((item) => {
    return item.name == selectedAnimal;
  });

  // Use the selected animal's image and name in the JSX.
  return <img src={animal.image} alt={animal.name} />;
}

export default Animal;
