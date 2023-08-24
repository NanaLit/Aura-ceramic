"use strict";

window.addEventListener("DOMContentLoaded", () => {

  gsap.fromTo('.technics__images .second', {
    y: 100
  }, {
    scrollTrigger: {
      trigger: ".technics__images",
      start: "top bottom", 
      end: "bottom top", 
      scrub: 1,
    },
    y: -100
  })

  const tlTitle = gsap.timeline({
    ease: "power2.out"
  });
  tlTitle.from('.promo__title div:not(.mask)', {
    opacity: 0,
    stagger: 0.05,
    x: -5,
    rotateX: 90
  })
    .from(".promo__title span .mask", {
      scaleX: 0,
      stagger: 0.5,
      duration: 1.2,
      ease: "power2.out"
    }, "<80%");
  
  gsap.from('.technics__title div:not(.word)', {
    scrollTrigger: {
      trigger: ".technics__title",
      start: "bottom bottom",
    },
    opacity: 0,
    stagger: 0.08,
    x: -5,
    rotateX: 90
  });

  gsap.from('.princip__title div:not(.word)', {
    scrollTrigger: {
      trigger: ".princip__title",
      start: "bottom bottom",
    },
    opacity: 0,
    stagger: 0.08,
    x: -5,
    rotateX: 90
  });


});



