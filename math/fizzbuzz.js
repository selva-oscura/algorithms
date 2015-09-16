// FizzBuzz is a game for children (or drunks) where you count from 1 to some number, but instead of saying numbers divisible by 3, say "Fizz" and instead of saying numbers divisible by 5, say "Buzz". For numbers divisible by both 3 and 5, say "FizzBuzz".

var fizzBuzz = function(numTrials){
	for(var i =0; i<=numTrials;i++){
		if(i%15 === 0){
			var output = "FizzBuzz";
		}else if(i%3 === 0){
			var output="Fizz";
		}else if(i%5 === 0){
			var output="Buzz";
		}else{
			var output = i;
		}
		console.log(output);
	}
}

fizzBuzz(100);
