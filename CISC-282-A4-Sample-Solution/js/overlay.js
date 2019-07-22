/******************************************************************************/
/* JavaScript-Only Solution */
/******************************************************************************/
/*
function dismissOverlay(event) {
	let overlayContainerElement = null;
	
	if ((event === undefined) || (event.target.id == "newsletter-overlay")) {
		overlayContainerElement = document.getElementById("newsletter-overlay");
		if (overlayContainerElement) {
			overlayContainerElement.classList.toggle("shown", false);			
		}
	}
}

function displayOverlay() {
	let overlayContainerElement = document.getElementById("newsletter-overlay");
	
	if (overlayContainerElement) {
		overlayContainerElement.classList.toggle("shown", true);			
		overlayContainerElement.addEventListener("click", dismissOverlay);
	}

	setTimeout(dismissOverlay, 10000);	
}

function setOverlayTimer() {
	setTimeout(displayOverlay, 3000);
}

window.addEventListener("load", setOverlayTimer);
*/

/******************************************************************************/
/* jQuery Solution */
/******************************************************************************/

function dismissOverlay(event) {
	if ((event === undefined) || (event.target.id == "newsletter-overlay")) {
		$("#newsletter-overlay").fadeOut(500);
	}
}

function displayOverlay() {
	$("#newsletter-overlay").fadeIn(500);
}

$(document).ready(function() {
	setTimeout(displayOverlay, 3000);
	setTimeout(dismissOverlay, 10000);	
	$("#newsletter-overlay").click(dismissOverlay);
});

