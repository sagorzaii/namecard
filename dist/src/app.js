let front = document.getElementById("front");
let back = document.getElementById("back");
let frontBtn = document.getElementById("front__btn");
let backBtn = document.getElementById("back__btn");
let cardContent = document.getElementById("card");

document.body.addEventListener("pointermove", (e) => {
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty("--posX", x - l - w / 2);
  el.style.setProperty("--posY", y - t - h / 2);
});

frontBtn.addEventListener("click", () => {
  front.classList.toggle("show");
  front.classList.toggle("hide");
  back.classList.toggle("show");
  back.classList.toggle("hide");
  cardContent.classList.add("rotate");
});

backBtn.addEventListener("click", () => {
  front.classList.toggle("show");
  front.classList.toggle("hide");
  back.classList.toggle("show");
  back.classList.toggle("hide");
  cardContent.classList.remove("rotate");
});
