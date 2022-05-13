import { getIcon } from "./icons.js";
import { Component } from "../component.js";
class IconComponent extends Component {
    constructor() {
        super();
        this.iconId = this.getAttribute("iconId");
        // const i: [string, Icon] | undefined = Object.entries(Icon).find(([k, v]) => k === this.iconId);
        // if (!i) {
        //   throw new Error(`Invalid Icon id: ${this.iconId}`);
        // }
        // const icon: IconData = getIcon(i[1]);
        const icon = getIcon(this.iconId);
        this.template.innerHTML = `
      <img src="${icon.src}" alt="${icon.name}" title="${icon.name}" class="icon">
    `;
        this.insertTemplate();
    }
}
window.customElements.define("game-icon", IconComponent);
