export default class Liker {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.heart = null;
  }

  init() {
    this.bindToDOM();
    this.addSubscribe(document.querySelector(".liker__widget"));
  }

  addSubscribe(element) {
    element.addEventListener("click", this.onClickLikerBtn.bind(this));
  }

  static get markup() {
    return `
            <div class="liker__widget">
                <div class="btn__block">
                  <button class="liker__btn">Like</button>
            </div>`;
  }

  bindToDOM() {
    this.parentEl.insertAdjacentHTML("beforeend", this.constructor.markup);
  }

  onClickLikerBtn(e) {
    if (!e.target.classList.contains("liker__btn")) {
      return;
    }
    e.preventDefault();

    this.createHeart();
    this.heart.addEventListener("animationend", () => {
      this.removeHeartImg();
    });
  }

  createHeart() {
    this.heart = document.createElement("div");
    this.heart.classList.add("heart-wrapper");

    const heartPic = document.createElement("span");
    heartPic.classList.add("heart__icon");

    this.heart.append(heartPic);
    document.querySelector(".liker__widget").append(this.heart);

    this.addTrackHeart(this.heart);
  }

  removeHeartImg() {
    Array.from(document.querySelectorAll(".heart-wrapper")).forEach((elem) => {
      elem.remove();
    });

    this.heart = null;
  }

  static arrayRandElem(arr) {
    const randEl = Math.floor(Math.random() * arr.length);
    return arr[randEl];
  }

  addTrackHeart(elem) {
    const arrTrajectorys = ["one", "two", "three", "four"];
    const coord = this.constructor.arrayRandElem(arrTrajectorys);
    elem.classList.add(coord);
  }
}
