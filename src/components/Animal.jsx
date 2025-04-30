import { data } from "../utils/constants";
import "./Animal.css";

function Animal({ selectedAnimal }) {
  const animal = data.find((item) => item.name === selectedAnimal);

  if (!animal) {
    return <p>No matching animal found.</p>;
  }

  return (
    <div className="animal-container">
      <p className="animal-text">
        This is your first Vite project — "Vite" means "quick" in French.
      </p>
      <img className="animal-image" src={animal.image} alt={animal.name} />
    </div>
  );
}

export default Animal;
