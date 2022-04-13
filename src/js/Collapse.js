export default class Collapse {
  constructor(container) {
    this.container = container;
  }

  createCollapse() {
    this.bindToDOM();
  }

  static get markup() {
    return `
    <div class="collapse">
        <div class="button__block">
          <button class="start__btn">Collapse</button>
        </div>
        <div class="widget__body">
          <p class="widget__text"></p>
        </div>
    </div>`;
  }

  bindToDOM() {
    this.container.insertAdjacentHTML("afterbegin", this.constructor.markup);
    document.querySelector(".widget__text").textContent =
      "Transition allows you to define a transition state between two states of an element. Different states can be defined using pseudo-classes such as :hover or :active or set dynamically using JavaScript.";
  }
}
