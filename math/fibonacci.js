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
