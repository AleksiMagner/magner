'use strict';

// Create the necessary elements for the buttons
// Button 1
const Button1 = document.querySelector('.toggle'),
			htmlButton1 = '<input type="checkbox"><span></span><span></span>';
Button1.insertAdjacentElement('beforeBegin', document.createElement('span'));
Button1.insertAdjacentHTML('afterBegin', htmlButton1);

// Button 2
const Button2 = document.querySelector('.toggle2'),
			htmlButton2 = '<input type="checkbox"><span></span>';
Button2.insertAdjacentHTML('afterBegin', htmlButton2);

// Setting
const classDark = 'is_dark', // Element class for dark theme
			Toggle1 = document.querySelector('.toggle > input'), // Toggle 1
			Label = document.querySelector('.mode > span:first-of-type'), // Label
			labelDark = 'Dark Theme', // Label for dark theme
			labelLight = 'Light Theme', // Label for light theme
			Toggle2 = document.querySelector('.toggle2 > input'); // Toggle 2
// Setting END

Toggle1.checked = true;
Label.innerHTML = labelLight;
Toggle2.checked = true;

// For one button
Toggle1.onclick = function() {
	if (this.checked == true) {
		this.checked == false;
		document.body.classList.remove(classDark);
		Label.innerHTML = labelLight;
	} else {
		this.checked == true;
		document.body.classList.add(classDark);
		Label.innerHTML = labelDark;
	}
};
		
// For the mutual operation of two buttons
const buttons = document.querySelectorAll('.mode input');

// iterate over all found elements and hang events on them
[].forEach.call(buttons, function(element) {
	element.onclick = function(e) {
		let nextButton;

		if (e.target.parentElement.className == 'toggle') {
			nextButton = Toggle2;
		} else if (e.target.parentElement.className == 'toggle2') {
			nextButton = Toggle1;
		}
		
		if (e.target.checked == true) {
			nextButton.checked = true;
			document.body.classList.remove(classDark);
			Label.innerHTML = labelLight;
		} else if (e.target.checked == false) {
			nextButton.checked = false;
			document.body.classList.add(classDark);
			Label.innerHTML = labelDark;
		}
	};
});
