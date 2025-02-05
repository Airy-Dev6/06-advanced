import { heroes } from "../data/heroes";

export const callbacksComponent = (element) => {
  const id = "5d86371f1efebc31def272e23";
  findHeroByID(id, (hero) => {
    element.innerHTML = hero?.name || "No se encontro el heroe";
  });
};

const findHeroByID = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

  callback(hero);
};
