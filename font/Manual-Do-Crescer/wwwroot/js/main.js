// NavBar Ativa
let navBar = document.querySelectorAll(".nav-link");
let nav = document.querySelector(".navigation-wrap");
let navPadding = document.querySelector(".navbar-padding");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    navPadding.style.backgroundColor = "var(--primary-color)";
    nav.classList.add("scroll-on");
    navBar.forEach(function (a) {
      a.classList.add("scroll-on");
    });
  } else {
    navPadding.style.backgroundColor = "var(--white-color)";
    nav.classList.remove("scroll-on");
    navBar.forEach(function (a) {
      a.classList.remove("scroll-on");
    });
  }
};

// Esconder Nav

let navCollapse = document.querySelectorAll(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// Counter Desing
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 1337, 3000);
  counter("count2", 100, 826, 2500);
  counter("count3", 0, 52, 3000);
  counter("count4", 0, 500, 3000);
});

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

const sections = document.querySelectorAll(".js-scroll");
const windowMetade = window.innerHeight * 0.8;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isVisibleSection = sectionTop - windowMetade < 0;
    if (isVisibleSection) {
      section.classList.add("ativo");
    }
  });
}

window.addEventListener("scroll", animaScroll);
