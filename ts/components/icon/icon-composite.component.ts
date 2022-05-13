import { getIcon, Icon, IconData } from "./icons.js";
import { Component } from "../component.js";

class IconCompositeComponent extends Component {
  private machineIconId: string | null = this.getAttribute("machineIconId");
  private itemIconId: string | null = this.getAttribute("itemIconId");
  private text: string | null = this.getAttribute("text");

  constructor() {
    super();
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

