/** @usage See README.md */
export class Component extends HTMLElement {
    constructor() {
        super(...arguments);
        this.template = document.createElement("template");
        this.contents = new DocumentFragment();
        // abstract render(): void;
    }
    /** Call in the constructor */
    insertTemplate() {
        this.contents.appendChild(this.template.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this.contents);
    }
}
