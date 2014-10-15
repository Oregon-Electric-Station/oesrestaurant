var topDiv = document.getElementById("topDiv");
var speed = 1.2;

window.onscroll = function() {
	var yOffset = window.pageYOffset;
	topDiv.style.backgroundPosition = "0px "+ (yOffset / speed) + "px";
}
