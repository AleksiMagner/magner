// Find and cut the description in small cards
const small = document.querySelectorAll('.card._small p');
CutString(small, 100);

// Find and cut the description in big cards
const big = document.querySelectorAll('.card._big p');
CutString(big, 235);

function CutString(card, count) {
	for (var i = 0; i < card.length; i++)
	{
		var text = card[i].textContent;

		if (text.length > count)
		{
			// Find the first half of the text
			var start = text.slice(0, count);
			var a = start.split(' ');
			a.splice(a.length-1, 1);
			start = a.join(' ');

			// Find the remaining half of the text to hide
			var end = text.slice(start.length);
			var a = end.split(' ');
			a.splice(0, 1);
			end = a.join(' ');

			card[i].innerHTML = start + '...<span> ' + end + '</span>';
		}
	}
}
