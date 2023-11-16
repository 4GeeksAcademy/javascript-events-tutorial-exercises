window.onload = function loadFn() {
	let containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		// Your code here
        	alert(event.target.id);
	});
};
