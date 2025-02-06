export const generatorFunctionsComponent = (element) => {
  //   const get = myFirstGenerationFunction();
  //   element.innerHTML = get.next().value;
  //   console.log(get.next());
  //   console.log(get.next());
  //   console.log(get.next());
  //   console.log(get.next());

  const genId = idGenerator();

  const button = document.createElement("button");
  button.innerText = "Count";
  element.append(button);

  const renderButton = () => {
    button.innerText = `Count ${genId.next().value}`;
  };
  button.addEventListener("click", renderButton);
};

function* idGenerator() {
  let currentId = 0;

  while (true) {
    yield ++currentId;
  }
}

function* myFirstGenerationFunction() {
  yield "Primer valor",
    yield "Segundo Valor",
    yield "Tercero Valor",
    yield "Cuarto Valor ";

  return "Ya no hay valores";
}
