import { heroes } from "../data/heroes";

export const promise = (element) => {
  const renderHero = (hero) => {
    element.innerHTML = hero;
  };

  const renderError = (error) => {
    element.innerHTML = error;
  };

  const renderTwo = (hero1, hero2) => {
    element.innerHTML = `
        <h3>${hero1}<h3/>
        <h3>${hero2}<h3/>
    `;
  };

  const id1 = "5d86371f97c29d020f1e1f6d";
  const id2 = "5d86371fd55e2e2a30fe1cc40";

  Promise.all([findHeroByID(id1), findHeroByID(id2)])
    .then(([hero1, hero2]) => {
      renderTwo(hero1, hero2);
    })
    .catch(renderError);
  // Promise.all

  // CASO 2

  //   let hero1;

  //   findHeroByID(id1)
  //     .then((hero) => {
  //       hero1 = hero;
  //       return findHeroByID(id2);
  //     })
  //     .then((hero2) => {
  //       renderTwo(hero1, hero2);
  //     })
  //     .catch(renderError);

  //   findHeroByID(id1).then(renderHero).catch(renderError);

  // CASO 1 No funciona para todos los casos, pero funciona para este problema
  //   findHeroByID(id1)
  //     .then((hero1) => {
  //       findHeroByID(id2)
  //         .then((hero2) => renderTwo(hero1, hero2))
  //         .catch(renderError);
  //     })
  //     .catch(renderError);
};

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
