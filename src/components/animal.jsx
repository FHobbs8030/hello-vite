import { data, defaultAnimalImage } from "../utils/constants";
import "./Animal.css";

function Animal({ selectedAnimal }) {
  const animal = data.find((item) => item.name === selectedAnimal);
  const imageSrc = animal ? animal.image : defaultAnimalImage;
  const name = animal ? animal.name : "Unknown";

  return (
    <main>
      <div className="container">
        <p>This is your first vite project</p>
        <p>"Vite" means "quick" in French</p>
      </div>
    </main>
  );
}

export default Animal;
