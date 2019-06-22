// Script for automatic slideshow only. Everything else works without a script
let delay = 3; // Delay animation in seconds

const sliderWrap = document.querySelector('.slider-container');
const slide = sliderWrap.querySelectorAll('input[id^="slides_"]');
let currentElem = null;
let idTimer;

play();

function play() {
	clearInterval(idTimer);
	idTimer = setInterval(function() {
		for (let i = 0; i < slide.length; i++) {
			if (slide[i].checked == true) {
				if (slide[i+1] != undefined) { slide[i+1].checked = true; return; }
				else { slide[0].checked = true; }
			}
		}
	}, delay * 1000);
}

sliderWrap.onmouseover = function(event) {
	clearInterval(idTimer);
  if (currentElem) { return; }

  let target = event.target;

  while (target != this) {
    if (target.tagName == 'UL' || target.classList.contains('bullets')) { break; }
    target = target.parentNode;
  }
  if (target == this) { return; }
  currentElem = target;
};

sliderWrap.onmouseout = function(event) {
  if (!currentElem) { return; }

  let relatedTarget = event.relatedTarget;
  if (relatedTarget) {
    while (relatedTarget) {
      if (relatedTarget == currentElem) { return; }
      relatedTarget = relatedTarget.parentNode;
    }
  }
	play();
  currentElem = null;
};
