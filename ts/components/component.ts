/** @usage See README.md */
export class Component extends HTMLElement {
  protected template: HTMLTemplateElement = document.createElement("template");
  protected contents: DocumentFragment = new DocumentFragment();

  /** Call in the constructor */
  protected insertTemplate(): void {
    this.contents.appendChild(this.template.content.cloneNode(true));
  }

  public connectedCallback(): void {
    this.appendChild(this.contents);
  }
  // abstract render(): void;
}
