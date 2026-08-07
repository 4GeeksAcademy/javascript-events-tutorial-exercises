// Adding the function to the window makes it globally available
window.calculateSumListener = function() {
	// Return the value of the input #firstNumber
	let stringA = document.getElementById("firstNumber").value;
	// Return the value of the input #secondNumber
	let stringB = document.getElementById("secondNumber").value;
	// Your code here
	const result = parseInt(stringA) + parseInt(stringB);

	let resultImput = document.getElementById("resultNumber");
	resultImput.value = result;
	console.log(`sumamos ${stringA} + ${stringB} = ${result} `);
	
};
