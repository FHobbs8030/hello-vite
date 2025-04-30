import { data } from "../utils/constants";
import "./Main.css";

function Main({ selectedAnimal }) {
  const animal = data.find((item) => item.name === selectedAnimal);

  return (
    <div className="container">
      <div className="text">
        <p>This is your first Vite project</p>
        <p>"Vite" means "quick" in French</p>
      </div>
      <img className="animal-image" src={animal.image} alt={animal.name} />
    </div>
  );
}

export default Main;
