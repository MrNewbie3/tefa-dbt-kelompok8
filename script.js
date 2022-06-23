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
  if (height > 80) {
    nav.classList.add("fixed");
  } else if (height < 80) {
    nav.classList.remove("fixed");
  }
});
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } },
    opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
    size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
    modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } },
  },
  retina_detect: true,
});

const namadepan = document.getElementById("fname");
const namaBelakang = document.getElementById("lname");
const mail = document.getElementById("email");
const country = document.getElementById("country");
const getAlert = document.getElementsByClassName("alertName");

const button = document.getElementsByClassName("button");
button[0].addEventListener("click", () => {
  let name = namadepan.value;
  let bn = namaBelakang.value;
  let em = mail.value;
  let co = country.value;
  document.getElementById("pID").innerHTML = `Your Name ${name} ${bn} your mail was ${em} and your country is ${co}`;
});
