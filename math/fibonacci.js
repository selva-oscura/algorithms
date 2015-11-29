// straightforward adding up of fibonacci with a loop -- start with the two starting values and then just increment up
function fibonacci(n){
	var answer;
	var last = 1;
	var nextToLast = 0;
	if(n<1){
		return false;
	}else if(n===1){
		return last;
	}else{
		for(var i = 2; i<=n; i++){
			answer = last+nextToLast;
			nextToLast = last;
			last = answer;
		}
		return answer;
	}
}


// recursive approach -- convenient, but soon the call stack starts to be pretty massive
function fibonacciRecursion(n){
	if(n<1){
		return false;
	}else if(n < 3){
		return 1;
	}else{
		return fibonacciRecursion(n-1)+fibonacciRecursion(n-2);
	}
}


// dynamic programming approach -- as we loop through, the answer is saved to a look-up table
function fibonacciWithDP(n){
	if(n<1){
		return false;
	}
	var answer = new Array(n);
	answer[0] = 0;
	answer[1] = 1;
	for(var i = 2; i<=n; i++){
		answer[i] = answer[i-1]+answer[i-2];
	}
	return answer[n];
}



// testing results of three functions
for(var i = 0; i<=20; i++){
	console.log('fibonacci number', i+', using\n fibonacci function:', fibonacci(i), '\n fibonacciRecursion:', fibonacciRecursion(i), '\n fibonacciWithDP:', fibonacciWithDP(i));
}


