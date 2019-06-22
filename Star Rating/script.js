window.onload = function () {
	var VotesArray = []; // array of votes
	VotesArray = [0,
								1,	// 1*
								5,	// 2*
								3,	// 3*
								10,	// 4*
								8];	// 5*

	// add the resulting numbers from the array together
	function arraySum(array) {
		let sum = 0;
		for(let i = 0; i < array.length; i++) { sum += array[i]; }
		return sum;
	}

	var TotalVotes = arraySum(VotesArray); // total votes of users
	var baseInArray = 0;
	
	for(let i = 1 ; i <= VotesArray.length-1; i++) { baseInArray += i * VotesArray[i]; }
	var TotalRating = baseInArray; // average user rating
	
	function totalRate(rate, vote) {
		rate = (baseInArray / ((VotesArray.length-1) * vote) * (VotesArray.length-1)).toFixed(1);
		rate = Number.parseFloat(rate);
		
		document.querySelector('.number-votes > span').innerHTML = ' ' + Math.round(vote);
		document.querySelector('.rating > input:first-of-type').value = rate;
		document.querySelector('.average-rating').innerHTML = rate;
		
		if (rate > 0 && rate <= 5) {
			document.querySelector('.slider > svg rect').style.opacity = '1';
			document.querySelector('.slider > svg rect').style.width = (rate / 5 * 100).toFixed(1).toString() + '%';
		} else {
			document.querySelector('.slider > svg rect').style.opacity = '0';
			document.querySelector('.average-rating').innerHTML = 0;
		}
		return rate;
	}
	TotalRating = totalRate(TotalRating, TotalVotes);
	
	// fade out
	function fadeOut(el) {
		(function fade() {
			if ((el.style.opacity -= .03) < 0) {
				el.style.display = 'none';
			} else { requestAnimationFrame(fade); }
		})();
	}

	// we select the necessary elements
	const LikeStar = document.querySelectorAll('.placehold > input');
	
	// iterate over all found elements and hang events on them
	[].forEach.call(LikeStar, function(element) {
		element.onclick = function(e) {
			// blocking the possibility of re-voting
			for (let i = 0; i < LikeStar.length; i++) {
				if (LikeStar[i].type == 'radio' && LikeStar[i].name == 'rating') {
					LikeStar[i].disabled = true;
				}
			}
			TotalVotes += 1;
			baseInArray += Number.parseInt(this.value);
			TotalRating = totalRate(TotalRating, TotalVotes);
			document.querySelector('.slider > svg rect').style.opacity = '0';
			
			const el = document.querySelector('.thanks');
			el.style.display = 'inline-block';
			el.style.opacity = '1';
			setTimeout(function() { fadeOut(el); }, 4000);
		}
	});
}
