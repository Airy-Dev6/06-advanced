export const environmentComponent = (element) => {
  console.log(import.meta.env);

  const html = `
        valiables 
    `;
  element.innerHTML = html;

  console.log("hola");
};
