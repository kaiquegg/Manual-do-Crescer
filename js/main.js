// NavBar Ativa
const navBar = document.querySelectorAll(".nav-link");
const nav = document.querySelector(".navigation-wrap");
const navPadding = document.querySelector(".navbar-padding");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    navPadding.style.backgroundColor = "var(--primary-color)";
    nav.classList.add("scroll-on");
    navBar.forEach((a) => a.classList.add("scroll-on"));
  } else {
    navPadding.style.backgroundColor = "var(--white-color)";
    nav.classList.remove("scroll-on");
    navBar.forEach((a) => a.classList.remove("scroll-on"));
  }
};

// Esconder Nav
const navCollapse = document.querySelectorAll(".navbar-collapse.collapse");
navBar.forEach((a) => {
  a.addEventListener("click", () => {
    navCollapse.forEach((el) => el.classList.remove("show"));
  });
});

// Counter Design
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    const obj = document.getElementById(id);
    if (!obj) return;

    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const step = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current === end) clearInterval(timer);
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

// Scroll com debounce usando requestAnimationFrame
const sections = document.querySelectorAll(".js-scroll");
const windowMetade = window.innerHeight * 0.8;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isVisible = sectionTop - windowMetade < 0;
    if (isVisible) section.classList.add("ativo");
  });
}

let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      animaScroll();
      ticking = false;
    });
    ticking = true;
  }
});
