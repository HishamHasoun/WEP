import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

let index_color = css`red`;
class MyElement extends LitElement {
  static get propertires() {
    return {
      counter: { type: Number, reflect: true },
      min: { type: Number, reflect: true },
      max: { type: Number, reflect: true },
      my_color: { type: String },
    };
  }

  constructor() {
    super();
    this.counter = 0;
    this.min = 0;
    this.max = 4;
    this.my_color = "black";
  }

  onClick(e) {
    if (e.originalTarget.id === "inc") {
      if (this.counter < this.max) {
        this.my_color = "black";
        this.counter++;
      } else {
        this.my_color = "red";
      }
    } else if (e.originalTarget.id === "dec") {
      if (this.counter > this.min) {
        this.my_color = "black";
        this.counter--;
      } else {
        this.my_color = "red";
      }
    } else if (e.originalTarget.id === "reset") {
      this.counter = this.min;
      this.my_color = "black";
    }
    this.setAttribute("counter", this.counter);
    this.requestUpdate();
  }

  change(e) {
    if (e.originalTarget.id === "max") {
      e.originalTarget.min = this.min;
      this.max = e.originalTarget.value;
      this.setAttribute("max", this.max);
    } else if (e.originalTarget.id === "min") {
      e.originalTarget.max = this.max;
      this.min = e.originalTarget.value;
      this.setAttribute("min", this.min);
    }
    this.requestUpdate();
  }

  render() {
    return html`
      <h1 style="color:${this.my_color}">${this.counter}</h1>
      <button id="inc" @click="${this.onClick}">increment</button>
      <button id="dec" @click="${this.onClick}">decrement</button>
      <br /><br />
      Min :
      <input id="min" type="number" @change=${this.change} value=${this.min} />
      <br />
      Max :
      <input id="max" type="number" @change=${this.change} value=${this.max} />
      <button id="reset" @click="${this.onClick}">reset</button>
    `;
  }
}

customElements.define("my-counter", MyElement);
