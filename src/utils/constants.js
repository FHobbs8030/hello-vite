export const data = [
  {
    name: "cat",
    image: new URL("../assets/animals/cat.jpg", import.meta.url).href,
  },
  {
    name: "dog",
    image: new URL("../assets/animals/dog.jpg", import.meta.url).href,
  },
  {
    name: "raccoon",
    image: new URL("../assets/animals/raccoon.jpg", import.meta.url).href,
  },
];

export const defaultAnimalImage = new URL(
  "../assets/animals/default.jpg",
  import.meta.url
).href;
