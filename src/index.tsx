import r2wc from "@r2wc/react-to-web-component"
import App from "./App"

const WebApp = r2wc(App, {
  props: {
    stringProp: "string",
    numProp: "number",
    floatProp: "number",
    trueProp: "boolean",
    falseProp: "boolean",
    arrayProp: "json",
    objProp: "json",
    funcProp: "function",
  },
})

customElements.define("web-app", WebApp)
