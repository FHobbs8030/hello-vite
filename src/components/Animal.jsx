import { data } from "../utils/constants";
import "./Animal.css";

function Animal({ selectedAnimal }) {
  const animal = data.find((item) => item.name === selectedAnimal);

  if (!animal) return <p>No animal selected.</p>;

  return (
    <div className="container">
      <p>This is your first Vite project</p>
      <p>"Vite" means "quick" in French.</p>
      <img className="animal-image" src={animal.image} alt={animal.name} />
    </div>
  );
}

export default Animal;
