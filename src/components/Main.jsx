import { data } from "../utils/constants";
import "./Main.css";

function Main({ selectedAnimal }) {
  const animal = data.find((item) => item.name === selectedAnimal);

  return (
    <div className="container">
      <p className="description">
        This is your first Vite project — "Vite" means "quick" in French
      </p>
      <img className="animal-image" src={animal.image} alt={animal.name} />
    </div>
  );
}

export default Main;
