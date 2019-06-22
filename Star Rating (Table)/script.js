var countStar = 5;

// add the resulting numbers from the array together
function arraySum(array) {
	var sum = 0;
	for(var i = 0; i < array.length; i++) { sum += array[i]; }
	return sum;
}

var Votes = [];
var Rating = [];

// we define selectors and we format numbers
for(var i = 0 ; i < countStar; i++) {
	var a = 'star' + (i + 1);
	var b = 'star_' + (i + 1);
	
	a = document.querySelector('.histo > div:nth-of-type('+(countStar-i)+') > span:last-of-type');
	b = parseInt(a.textContent.replace(/\D/g, ''));
	a.innerHTML = "<span>" + Math.round(b).toLocaleString() + "</span>";
	
	Votes[i] =+ b;
	Rating[i] =+ b * (i + 1);
}

var TotalVotes = arraySum(Votes);
var TotalRating = arraySum(Rating);
TotalRating = (TotalRating / (countStar * TotalVotes) * countStar).toFixed(1);

// placing on the page the average rating and the number of total votes
document.querySelector('.num').innerHTML = TotalRating;
document.querySelector('.users').innerHTML = ' ' + Math.round(TotalVotes).toLocaleString() + ' Total';

// histogram animation
setTimeout(function() {
	for(var i = 0 ; i < countStar; i++) {
		var a = 'star' + (i + 1);
		var b = 'star_' + (i + 1);
		
		a = document.querySelector('.histo > div:nth-of-type('+(countStar-i)+') > span:last-of-type');
		b = parseInt(a.textContent.replace(/\D/g, ''));
		a.style.width = Math.round(b / TotalVotes * 100) + '%';
	}
	document.querySelector('.rating-stars').style.width = Math.round(TotalRating / countStar * 100) + '%';
}, 1000);

// fade in
function fadeIn(el, display) {
	el.style.opacity = 0;
	el.style.display = display || "inline-block";
	
	(function fade() {
		var val = parseFloat(el.style.opacity);
		if (!((val += .03) > 1)) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
}

setTimeout(function() {
	for(var i = 0 ; i < countStar; i++) {
		var el = document.querySelector('.histo > div:nth-of-type('+(countStar-i)+') > span:last-of-type > span');
		fadeIn(el);
	}
}, 2000);

