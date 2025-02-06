import { heroes } from "../data/heroes";

export const asyncAwaitComponent = async (element) => {
  const id1 = "5d86371fd55e2e2a30fe1ccb";
  const id2 = "5d86371fd55e2e2a30fe1ccb1a";

  const hero1 = await findHero(id1);
  const hero2 = await findHero(id2).catch((err) => `hola${err}`);
  Promise.allSettled([hero1, hero2]);
  element.innerHTML = `${hero1} / ${hero2}`;
};

const findHero = async (id) => {
  const hero = await heroes.find((hero) => hero.id === id);
  return hero ? hero.name : `Hero with id ${id} not found`;
};
