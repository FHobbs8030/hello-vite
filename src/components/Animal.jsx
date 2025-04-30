import { data } from "../utils/constants";

function Animal({ selectedAnimal }) {
  const animal = data.find((item) => item.name === selectedAnimal);

  if (!animal) {
    return <p>No matching animal found.</p>;
  }

  return (
    <div>
      <img
        src={animal.image}
        alt={animal.name}
        style={{ width: "300px", borderRadius: "8px" }}
      />
      <p>{animal.name}</p>
    </div>
  );
}

export default Animal;
