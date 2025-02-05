import { heroes } from "../data/heroes";

export const promise = (element) => {};

const findHeroByID = (id) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.id === id);

    if (hero) {
      resolve(hero.name);
      resolve;
    }

    reject(`Hero with id ${id}, not finded `);
  });
};
