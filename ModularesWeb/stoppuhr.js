import {
  LitElement,
  html,
} from "https://unpkg.com/lit-element/lit-element.js?module";

var myVar;
status = "stop";
class MyElement extends LitElement {
  static get propertires() {
    return {
      time: { type: Number, reflect: true },
      sec: { type: Number, reflect: true },
      minute: { type: Number, reflect: true },
      hour: { type: Number, reflect: true },
    };
  }

  constructor() {
    super();
    this.time = 0;
    this.sec = 0;
    this.minute = 0;
    this.hour = 0;
  }

  start() {
    if (status === "stop") {
      myVar = setInterval(() => {
        this.setAttribute("time", this.sec++);
        this.requestUpdate();
      }, 1000);
      status = "start";
    }
  }

  stop() {
    clearInterval(myVar);
    status = "stop";
  }

  reset() {
    stop();
    this.requestUpdate();
  }

  reset_change(e) {
    this.sec = e.originalTarget.valueAsDate.getSeconds();
    this.minute = e.originalTarget.valueAsDate.getMinutes();
    this.hour = e.originalTarget.valueAsDate.getHours() - 1;
  }

  step(e) {
    const item = document.createElement("li");
    item.innerHTML = `${new Date(
      0,
      0,
      0,
      this.hour,
      this.minute,
      this.sec
    ).toLocaleTimeString()}`;
    e.originalTarget.parentElement.querySelector("ul").appendChild(item);
  }

  render() {
    return html`
      <h1>
        ${new Date(
          0,
          0,
          0,
          this.hour,
          this.minute,
          this.sec
        ).toLocaleTimeString()}
      </h1>
      <button @click=${this.start}>Start</button>
      <button @click=${this.stop}>Stop</button><br />
      <div id="step">
        <button @click=${this.step}>Step</button>
        <ul></ul>
      </div>
      <button @click=${this.reset}>Reset</button>
      <input id="mytime" type="time" @change="${this.reset_change}" step="1" />
    `;
  }
}

customElements.define("stopp-uhr", MyElement);
