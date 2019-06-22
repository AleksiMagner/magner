const element = document.querySelectorAll('ul > li');
const elementInLine = 4;
const delay = 10; // in seconds

var i = 0;

function Block(c) {
	for (let j = 0; j < elementInLine; j++) {
		element[i + j].className = c;
	}
}

Block('active');

setInterval(function() {
	Block('');

  if (i < element.length - elementInLine) { i += elementInLine; }
  else { i = 0; }
  
	Block('active');
}, delay * 1000);
