import { render } from "react-dom";
import { App } from "./component/App";

const rootElement: HTMLElement | null = 
  document.getElementById("root");
render(<App />, rootElement);