import { data, defaultAnimalImage } from "../utils/constants";
import "./Animal.css";

function Animal({ selectedAnimal }) {
  const animal = data.find((item) => item.name === selectedAnimal);

  const imageSrc = animal ? animal.image : defaultAnimalImage;
  const name = animal ? animal.name : "Unknown animal";

  return (
    <div className="text-row">
      <p className="left-text">This is your first Vite project</p>
      <p className="right-text">"Vite" means "quick" in French.</p>
    </div>
  );
}

export default Animal;
