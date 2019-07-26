'use strict';

// Settings
let SVG_File = 'https://github.com/AleksiMagner/magner/raw/master/svg.html';
let FileVersion = 1; // Attention!!! Be sure to change the revision after updating the file.

// Storing SVG Sprite in localStorage
;(function(window, document) {
	'use strict';

	if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;

	let isLocalStorage = 'localStorage' in window && window['localStorage'] !== null, request, data,
		insertIT = function() { document.body.insertAdjacentHTML('afterbegin', data); },
		insert = function() {
			if (document.body) insertIT();
			else document.addEventListener('DOMContentLoaded', insertIT);
		};

	if (isLocalStorage && localStorage.getItem('inlineSVGrev') == FileVersion) {
		data = localStorage.getItem('inlineSVGdata');
		if (data) {
			insert();
			return true;
		}
	}

	try {
		request = new XMLHttpRequest();
		request.open('GET', SVG_File, true);
		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				data = request.responseText;
				insert();
				if (isLocalStorage) {
					localStorage.setItem('inlineSVGdata', data);
					localStorage.setItem('inlineSVGrev', FileVersion);
				}
			}
		}
		request.send();
	}
	catch(e){}
} (window, document));