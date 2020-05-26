// JavaScript Document
(function () {
	document.addEventListener('click', (event) => {
		if (event.target.classList.contains('popup')) {
			
		} else {
			let popups = document.querySelectorAll('.show');
			if (popups) {
				popups.forEach((popup) => {
					popup.classList.remove('show');
				});
			}
			console.log('check');
		}
	});
	
})();
function notification() {
	"use strict";
	  var popup = document.getElementById("myPopup");
	  popup.classList.toggle("show");
	console.log('popup check');
	}