import { heroes } from "../data/heroes";

export const callbacksComponent = (element) => {
  const id = "5d86371f1efebc31def272e2";
  findHeroByID(id, (hero) => console.log(hero.name));
};

const findHeroByID = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

  callback(hero);
};
