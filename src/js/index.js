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


  gsap.utils.toArray(".promo").forEach((section) => {
    const title = section.querySelector('.promo__title');
    const word = title.querySelectorAll('div:not(.mask');
    const mask = title.querySelectorAll('span .mask');
    const img = section.querySelector('.promo__wrapper img');
    const tlTitle = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        start: 'top bottom',
      },
    });

    tlTitle.fromTo(word, {
      autoAlpha: 0,
      x: -5,
      rotateX: 90
    }, {
      autoAlpha: 1,
      x: 0,
      rotateX: 0,
      stagger: {
      amount: 1.2,
        },
    })
    .fromTo(img, {
      y: 100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "power4.out"
    }, "<20%")
      .fromTo(mask, {
        scaleX: 0,
      }, {
        scaleX: 1,
        stagger: 0.5,
        duration: 1.2,
        ease: "power2.out"
      }, "<20%")
      
  });
  
  
  // const tlTitle = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.promo__title',
  //     start: 'top bottom',
  //   }
  // });

  
  
  gsap.fromTo('.technics__title div:not(.word)', {
    autoAlpha: 0,
    x: -5,
    rotateX: 90
  }, {
    scrollTrigger: {
      trigger: ".technics__title",
      start: "bottom bottom",
    },
    stagger: {
      amount: 1.2,
    },
    autoAlpha: 1,
    x: 0,
    rotateX: 0
  });



  gsap.from('.princip__title div:not(.word)', {
    scrollTrigger: {
      trigger: ".princip__title",
      start: "bottom bottom",
    },
    opacity: 0,
    stagger: {
      amount: 1.2,
    },
    x: -5,
    rotateX: 90
  });


});



