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

// testing results of three functions
for(var i = 0; i<=20; i++){
	console.log('fibonacci number', i+', using fibonacci function:', fibonacci(i));
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

// testing results of three functions
for(var i = 0; i<=20; i++){
	console.log('fibonacci number', i+', using fibonacciRecursion:', fibonacciRecursion(i));
}

