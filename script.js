const body = document.querySelector("body");
const navButton = document.getElementsByClassName("nav-button");
const content = document.getElementsByClassName("child-content");
const sideButton = document.getElementsByClassName("sidebar");
const headImage = document.querySelector(".top-image");

for (let i = 0; i < navButton.length; i++) {
  navButton[i].addEventListener("click", (e) => {
    for (let k = 0; k < content.length; k++) {
      content[k].classList.add("hidden");
    }
    e.preventDefault();
    content[i].classList.toggle("hidden");
  });
}
for (let i = 0; i < sideButton.length; i++) {
  sideButton[i].addEventListener("click", (e) => {
    for (let k = 0; k < content.length; k++) {
      content[k].classList.add("hidden");
    }
    e.preventDefault();
    content[i].classList.toggle("hidden");
  });
}
let mouseover = headImage.addEventListener("mousemove", (e) => {
  headImage.setAttribute("style", `transform: rotateX(${(e.clientY - 280) / 10}deg) rotateY(${(e.clientX - 750) / 10}deg)`);
});
let mouseLeave = headImage.addEventListener("mouseleave", (e) => {
  headImage.setAttribute("style", `transform: rotateX(0deg) rotateY(0deg)`);
});

body.addEventListener("scroll", (e) => {
  console.log(e.pageYOffset());
});
