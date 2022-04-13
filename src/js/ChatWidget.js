export default class ChatWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  init() {
    this.bindToDOM();
    this.addSubscribe(document.querySelector(".chat__widget"));
  }

  addSubscribe(element) {
    element.addEventListener("click", this.onClickCloseForm.bind(this));
    element.addEventListener("click", this.onClickStartChat.bind(this));
  }

  static get markup() {
    return `
        <div class="chat__widget">
        
          <div class="form-wrapper">
          <button class="close__form">X</button>
            <form class="form__feedback" action="#">
              <div class="form__header">
                <h3 class="form__title">Напишите нам!</h3>
                
              </div>
              <textarea class="panel__feedback"></textarea>
              <button class="send__feedback">Отправить</button>
            </form>
          </div>
            <div class="chat__btn-block">
              <button class="form__btn"></button>
        </div>`;
  }

  bindToDOM() {
    this.parentEl.insertAdjacentHTML("afterend", this.constructor.markup);
  }

  onClickCloseForm(e) {
    if (!e.target.classList.contains("close__form")) {
      return;
    }
    e.preventDefault();
    document.querySelector(".form-wrapper").classList.remove("active__chat");
    document.querySelector(".form__btn").classList.remove("active__btn");
  }

  onClickStartChat(e) {
    if (!e.target.classList.contains("form__btn")) {
      return;
    }
    e.preventDefault();
    document.querySelector(".form__btn").classList.add("active__btn");
    document.querySelector(".form-wrapper").classList.add("active__chat");
  }
}
