const burger = document.querySelector(".burger");

function homeAnimation() {
  const title = document.querySelector(".title");
  const home = document.querySelector(".home");
  const scroll = home.querySelector(".scroll");
  const contact = home.querySelector(".contact");

  TweenMax.from(title, 2, { y: "-20%", opacity: 0, delay: 1 });
  TweenMax.from(contact, 2, { x: "40%", opacity: 0, delay: 0.5 });
  TweenMax.from(scroll, 2, { y: "-60%", opacity: 0, delay: 1.5 });
}

const controller = new ScrollMagic.Controller();
const aboutTl = new TimelineMax();
aboutTl.from(".about-title", 1, { scale: 0.8, autoAlpha: 0 });
aboutTl.from(".about-name", 1, { y: "-20%", autoAlpha: 0 }, "-=1");
aboutTl.from(".about-desc", 1, { y: "20%", autoAlpha: 0 }, "-=1");
aboutTl.from(".about-btn", 1, { autoAlpha: 0 }, "-=1");

const scene1 = new ScrollMagic.Scene({
  triggerElement: "#about",
  duration: 250,
  triggerHook: 0,
  offset: -300,
})
  .setTween(aboutTl)
  .addTo(controller);

const worksTl = new TimelineMax();
worksTl.from(".works-arrow-left", 1, { x: "150%" });
worksTl.from(".works-arrow-right", 1, { x: "-150%" }, "-=1");
worksTl.from(".works-title", 1, { y: "-10%", autoAlpha: 0, scale: 2 }, "-=1.5");
const scene2 = new ScrollMagic.Scene({
  triggerElement: "#works",
  triggerHook: 0,
  offset: -200,
})

  //   .addIndicators({ name: "works" })
  .setTween(worksTl)
  .addTo(controller);

let screenWidth = window.innerWidth;
const breakPointSp = 480;
if (screenWidth > breakPointSp) {
  const serviceTl = new TimelineMax();
  serviceTl.from(".services-title", 1, { y: "20%", autoAlpha: 0, scale: 0.7 });
  serviceTl.from(".services-card", 1, { y: "40%", autoAlpha: 0 });
  serviceTl.from(".service-contact", 1, { x: "-40%", autoAlpha: 0 }, "-=1");
  const scene3 = new ScrollMagic.Scene({
    triggerElement: "#services",
    duration: 400,
    triggerHook: 0,
    offset: -500,
  })
    //   .addIndicators({ name: "service" })
    .setTween(serviceTl)
    .addTo(controller);
}

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", 0.5, { rotate: "45", y: 5 });
    gsap.to(".line2", 0.5, { rotate: "-45", y: -5 });
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
    document.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0 });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0 });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
    document.classList.remove("hide");
  }
}

//Eventlistner
window.addEventListener("load", homeAnimation);
burger.addEventListener("click", navToggle);
