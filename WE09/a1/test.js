import {
  LitElement,
  html,
} from "https://unpkg.com/lit-element/lit-element.js?module";
import { routerMixin } from "https://unpkg.com/lit-element-router/lit-element-router.js?module";
class App extends routerMixin(LitElement) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      data: { type: Object },
    };
  }

  static get routes() {
    return [
      {
        name: "home",
        pattern: "",
        data: { title: "Home" },
      },
      {
        name: "info",
        pattern: "info",
      },
    ];
  }

  constructor() {
    super();
    this.route = "";
    this.params = {};
    this.query = {};
    this.data = {};
  }
  route(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
  }

  render() {
    return html`
      sdfsdf
      <app-link href="/">Home</app-link>
      <app-link href="/info">Info</app-link>
      <app-link href="/info?data=12345">Info?data</app-link>
      <app-link href="/user/14">User/14</app-link>

      <app-main active-route=${this.route}>
        <h1 route="Home">Homee</h1>
        <h1 route="info">Info ${this.query.data}</h1>
      </app-main>
    `;
  }
}

customElements.define("my-app", App);
