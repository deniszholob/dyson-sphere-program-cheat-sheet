import { Component } from "../component.js";
class IconCompositeComponent extends Component {
    constructor() {
        super();
        this.machineIconId = this.getAttribute("machineIconId");
        this.itemIconId = this.getAttribute("itemIconId");
        this.text = this.getAttribute("text");
        this.template.innerHTML = `
      <div class="icon-composite">
        <game-icon iconId="${this.machineIconId}" class="icon-bg"></game-icon>
        <game-icon iconId="${this.itemIconId}" class="icon-fg"></game-icon>
        <span class="icon-text">${this.text}</span>
      </div>
    `;
        this.insertTemplate();
    }
}
window.customElements.define("icon-composite", IconCompositeComponent);
