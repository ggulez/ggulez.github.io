
"use strict";

function changeColor() {
	let color = document.body.style.color;
	if (color === 'white') {
		document.body.style.color = 'black';
	} else {
		document.body.style.color = 'white';
	}
}