import { data, defaultAnimalImage } from "../utils/constants";
import "./Animal.css";

function Animal({ selectedAnimal }) {
  const animal = data.find((item) => item.name === selectedAnimal);

  const imageSrc = animal ? animal.image : defaultAnimalImage;
  const name = animal ? animal.name : "Unknown animal";

  return (
    <div className="container">
      <p>This is your first Vite project</p>
      <p>"Vite" means "quick" in French.</p>
      <img className="animal-image" src={imageSrc} alt={name} />
    </div>
  );
}

export default Animal;
