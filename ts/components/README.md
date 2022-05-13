# Components

## Usage
``` js
import { Component } from "./component.js";

class CoolNameComponent extends Component {
  constructor() {
    super();
    this.template.innerHTML = ``;
    this.insertTemplate();
  }
}

window.customElements.define("cool-name", CardBadgeComponent);
```
