window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	document.getElementById("theGreen").addEventListener("click", clickFunction);
};

// The listener function here
function clickFunction() {
	alert("woohoo!");
}
