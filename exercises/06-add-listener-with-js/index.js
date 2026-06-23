window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	
};

// The listener function here
const displayAlert = () =>{
	alert("Wooho");
}

const greenButton = document.getElementById("theGreen");
greenButton.addEventListener("click",displayAlert);