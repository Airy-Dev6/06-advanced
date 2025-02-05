import { heroes } from "../data/heroes";

export const asyncComponent = (element) => {
  const id = "5d86371fd55e2e2a30fe1ccb2 ";

  console.log(findHero(id));

  findHero(id)
    .then(({ name }) => (element.innerHTML = name))
    .catch((error) => (element.innerHTML = "hola mundo"));
};

// const findHero = async (id) => {
//   try {
//     const hero = heroes.find((hero) => hero.id === id);
//     return hero;
//   } catch (error) {
//     return "hola mundo ";
//   }
// };

const findHero = async (id) => {
  const hero = await heroes.find((hero) => hero.id === id);

  return hero;
};
