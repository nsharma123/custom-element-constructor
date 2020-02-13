import { LightningElement, api, buildCustomElementConstructor } from "lwc";

export default class Foo extends LightningElement {
  @api name = "World123";
}

customElements.define("custom-element", buildCustomElementConstructor(Foo));
