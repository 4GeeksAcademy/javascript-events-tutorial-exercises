window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	const greenButton = document.getElementById("theGreen");
	greenButton.addEventListener("click", myClickFunction);
};

// The listener function here
function myClickFunction() {
	alert("woohoo!");
};
