var BUTTONRIGHT = document.querySelector('.slider__right');
var BUTTONLEFT = document.querySelector('.slider__left');
var SLIDES = document.querySelectorAll('.slider__item');
var SLIDER = document.querySelector('.slider');

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }
  var index = 0;
  var i = 0;
  var lastSl = SLIDES[SLIDES.length - 1];
  var firstSl = SLIDES[0];
  var pxLastSl = getOffset(firstSl).left;
BUTTONRIGHT.addEventListener('click', function() {
    if ( i > getOffset(lastSl).left) {
        i = 0;
    } else {
        i += 375;
    }
    
    SLIDER.style.left = - i + 'px';
})

BUTTONLEFT.addEventListener('click', function() {
    if ( i <= 0) {
        i = pxLastSl;
        
    } else {
        i -= 375;
    }
    
    SLIDER.style.left =  i + 'px';
    console.log(i);
})



