import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { environmentComponent } from "./concepts/01-environment";
import { callbacksComponent } from "./concepts/02-callbacks";
import { promise } from "./concepts/03-promises";
import { promiseRaceComponent } from "./concepts/04-promise-race";
import { asyncComponent } from "./concepts/05-async";
import { asyncAwaitComponent } from "./concepts/06-async-await";
import { forAwaitComponent } from "./concepts/07-for-await";
import { generatorFunctionsComponent } from "./concepts/08-generator";
import { generatorsAsync } from "./concepts/09-generators-async";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    </div>
  </div>
`;

const element = document.querySelector(".card");

// environmentComponent(element);
// callbacksComponent(element);
// promise(element);
// promiseRaceComponent(element);
// asyncComponent(element);
// asyncAwaitComponent(element);
// forAwaitComponent(element);
// generatorFunctionsComponent(element);
generatorsAsync(element);
