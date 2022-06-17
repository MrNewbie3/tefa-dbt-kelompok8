const navButton = document.getElementsByClassName("nav-button");
const content = document.getElementsByClassName("child-content");
const sideButton = document.getElementsByClassName("sidebar");
const headImage = document.querySelector(".top-image");
const nav = document.querySelector("nav");
for (let i = 0; i < navButton.length; i++) {
  navButton[i].addEventListener("click", (e) => {
    for (let k = 0; k < content.length; k++) {
      content[k].classList.add("hidden");
    }
    e.preventDefault();
    content[i].classList.toggle("hidden");
    content[i].classList.add("coming");
    setTimeout(() => {
      content[i].classList.remove("coming");
    }, 600);
  });
}
for (let i = 0; i < sideButton.length; i++) {
  sideButton[i].addEventListener("click", (e) => {
    for (let k = 0; k < content.length; k++) {
      content[k].classList.add("hidden");
    }
    e.preventDefault();
    content[i].classList.toggle("hidden");
    content[i].classList.add("coming");
    setTimeout(() => {
      content[i].classList.remove("coming");
    }, 600);
  });
}
let mouseover = headImage.addEventListener("mousemove", (e) => {
  headImage.setAttribute("style", `transform: rotateX(${(e.clientY - 280) / 10}deg) rotateY(${(e.clientX - 750) / 10}deg)`);
});
let mouseLeave = headImage.addEventListener("mouseleave", (e) => {
  headImage.setAttribute("style", `transform: rotateX(0deg) rotateY(0deg)`);
});

document.addEventListener("scroll", () => {
  let height = window.pageYOffset;
  console.log(height);
  if (height > 80) {
    nav.classList.add("fixed");
  } else if (height < 80) {
    nav.classList.remove("fixed");
  }
});
