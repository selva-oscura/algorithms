// Factorial -- n factorial (n!) is defined as 1 * 2 * ... * (n-1) *n

// Iteration variant of factorial

var iteratedFactorial = function (n){
	if(n === Number(n) && n>=0 && n%1===0){	
		var output = 1;
		for(var i = 1; i<=n; i++){
			output *= i;
		}
		return output;
	}
	return "input must be an integer greater than or equal to 0";
}

console.log(iteratedFactorial(2));
console.log(iteratedFactorial(4));
console.log(iteratedFactorial(8));
console.log(iteratedFactorial(13));
console.log(iteratedFactorial(27));
console.log(iteratedFactorial(0));
console.log(iteratedFactorial(1.2));
console.log(iteratedFactorial(-4));
console.log(iteratedFactorial('abc'));
console.log(iteratedFactorial({a:'abc'}));


var recursiveFactorial = function(n){
	if(n === Number(n) && n>=0 && n%1===0){	
		if(n===1 || n===0){
			return 1;
		}
		return n*recursiveFactorial(n-1);
	}
	return "input must be an integer greater than or equal to 0";
}

console.log(recursiveFactorial(2));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(8));
console.log(recursiveFactorial(13));
console.log(recursiveFactorial(27));
console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1.2));
console.log(recursiveFactorial(-4));
console.log(recursiveFactorial('abc'));
console.log(recursiveFactorial({a:'abc'}));
