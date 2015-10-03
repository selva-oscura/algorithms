// Factorial -- n factorial (n!) is defined as 1 * 2 * ... * (n-1) *n

// Iteration variant of factorial

var iteratedFactorial = function (n){
	var output = 1;
	for(var i = 1; i<=n; i++){
		output *= i;
	}
	return output;
}

console.log(iteratedFactorial(2));
console.log(iteratedFactorial(4));
console.log(iteratedFactorial(8));
console.log(iteratedFactorial(13));
console.log(iteratedFactorial(27));
