import { heroes } from "../data/heroes";

export const generatorsAsync = async (element) => {
  const getHero = getHeroGenerator();
  let isDoneHero = false;

  do {
    const { value, done } = await getHero.next();
    isDoneHero = done;
    // element.innertHTML = (await getHero.next()).value;
    if (isDoneHero) break;
    element.innerHTML = value;
  } while (!isDoneHero);
  console.log("hola");
};

async function* getHeroGenerator() {
  for (const hero of heroes) {
    await sleep();
    yield hero.name;
  }
}

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};
