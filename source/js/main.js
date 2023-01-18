// var BUTTONRIGHT = document.querySelector('.slider__right');
// var BUTTONLEFT = document.querySelector('.slider__left');
// var SLIDES = document.querySelectorAll('.slider__item');
// var SLIDER = document.querySelector('.slider');

// function getOffset(el) {
//     const rect = el.getBoundingClientRect();
//     return {
//       left: rect.left + window.scrollX,
//       top: rect.top + window.scrollY
//     };
//   }

//   var i = 0;
//   var lastSl = SLIDES[SLIDES.length - 1];
  
// BUTTONRIGHT.addEventListener('click', function() {
//     if ( i > getOffset(lastSl).left) {
//         i = 0;
//     } else {
//         i += 100;
//     }
//     console.log(i);
//     SLIDER.style.left = - i + 'vw';
// });

// BUTTONLEFT.addEventListener('click', function(evt) {
//     if (i == 0) {
//       i = -400;
//     } else {
//       i = i + 100;
//       console.log(i);
//     }
    
//     SLIDER.style.left = i + 'vw';
// })

"use strict";
      const arrowBtnLeft = document.querySelector(".slider__left");
      const arrowBtnRight = document.querySelector(".slider__right");

      const slides = document.querySelectorAll(".slider__item");
      const dotsContainer = document.querySelector(".dots");

      let curSlide = 0;

      // functions
      const goToSlide = (slide) => {
        slides.forEach((s, i) => {
          s.style.transform = `translateX(${100 * (i - slide)}%)`;
        });
      };

      const nextSlide = function () {
        curSlide === slides.length - 1 ? (curSlide = 0) : curSlide++;
        goToSlide(curSlide);
        activateDot(curSlide);
      };

      const prevSlide = function () {
        curSlide === 0 ? (curSlide = slides.length - 1) : curSlide--;
        goToSlide(curSlide);
        activateDot(curSlide);
      };

      const createDots = () => {
        slides.forEach((_, i) =>
          dotsContainer.insertAdjacentHTML(
            "beforeend",
            `<button class='dot' data-slide='${i}'></button>`
          )
        );
      };

      const activateDot = (slide) => {
        document
          .querySelectorAll(".dot")
          .forEach((dot) => dot.classList.remove("dot--active"));
        document
          .querySelectorAll(`.dot[data-slide="${slide}"]`)
          .forEach((dot) => dot.classList.add("dot--active"));
      };

      // inital
      const init = () => {
        goToSlide(0);
        createDots();
        activateDot(0);
      };
      init();

      // event listeners
      arrowBtnLeft.addEventListener("click", prevSlide);
      arrowBtnRight.addEventListener("click", nextSlide);

      dotsContainer.addEventListener("click", function (e) {
        // if needed to work only on dots and not on dot container
        if (e.target.classList.contains("dot")) {
          const { slide } = e.target.dataset;
          goToSlide(slide);
          activateDot(slide);
        }
      });
