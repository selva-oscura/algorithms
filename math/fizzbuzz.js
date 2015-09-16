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


// This begged the question regarding different ways to code this function: which ways would be less time-consuming?  Coded different variants, verified that each roduced the proper output, and then dropped the console.log and set each function to run from 1 to 1,000,000,000.

var fizzBuzz0 = function(numTrials){
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
		// console.log(output);
	}
}
var fizzBuzz1 = function(numTrials){
	for(var i =0; i<=numTrials;i++){
		if((i%3 === 0) && (i%5 === 0)){
			var output = "FizzBuzz";
		}else if(i%3 === 0){
			var output="Fizz";
		}else if(i%5 === 0){
			var output="Buzz";
		}else{
			var output = i;
		}
		// console.log(output);
	}
}

var fizzBuzz2 = function(numTrials){
	for(var i =0; i<=numTrials;i++){
		if(i%15 === 0){
			var output = "FizzBuzz";
		}else{		
			if(i%3 === 0){
				var output = "Fizz";
			}else if(i%5 === 0){
				var output = "Buzz";
			}else{
				var output = i;
			}
		}
		// console.log(output);
	}
}
var fizzBuzz3 = function(numTrials){
	for(var i =0; i<=numTrials;i++){
		var output = "";
		if(i%3 === 0){
			output+="Fizz";
		}
		if(i%5 === 0){
			output+="Buzz";
		}
		if(output.length<1){
			output = i;
		}
		// console.log(output);
	}
}


// comparison for time taken by each of the four different fizzbuzz variants
var timeTrials = function(){
	var numTrials = 100000000;
	var start0 = new Date();
	fizzBuzz0(numTrials);
	var end0 = new Date();
	var start1 = new Date();
	fizzBuzz1(numTrials);
	var end1 = new Date();
	var start2 = new Date();
	fizzBuzz2(numTrials);
	var end2 = new Date();
	var start3 = new Date();
	fizzBuzz3(numTrials);
	var end3 = new Date();
	var output = {};
	output.timetrial0 = end0 - start0;
	output.timetrial1 = end1 - start1;
	output.timetrial2 = end2 - start2;
	output.timetrial3 = end3 - start3;
	return output;
}
console.log(timeTrials());


// Results from 10 trials (console.log dropped after verifying that each function works, each function counting from 1 to 1,000,000,000)

// { timetrial0: 436,
//   timetrial1: 374,
//   timetrial2: 485,
//   timetrial3: 638 }

// { timetrial0: 425,
//   timetrial1: 375,
//   timetrial2: 516,
//   timetrial3: 651 }

// { timetrial0: 426,
//   timetrial1: 431,
//   timetrial2: 425,
//   timetrial3: 680 }

// { timetrial0: 507,
//   timetrial1: 425,
//   timetrial2: 505,
//   timetrial3: 743 }

// { timetrial0: 425,
//   timetrial1: 446,
//   timetrial2: 433,
//   timetrial3: 648 }

// { timetrial0: 440,
//   timetrial1: 373,
//   timetrial2: 425,
//   timetrial3: 641 }

// { timetrial0: 497,
//   timetrial1: 429,
//   timetrial2: 498,
//   timetrial3: 764 }

// { timetrial0: 505,
//   timetrial1: 427,
//   timetrial2: 521,
//   timetrial3: 753 }

// { timetrial0: 477,
//   timetrial1: 373,
//   timetrial2: 426,
//   timetrial3: 655 }

// { timetrial0: 425,
//   timetrial1: 393,
//   timetrial2: 425,
//   timetrial3: 640 }

// While there are some variations in the rankings, the general pattern is that fizzBuzz1 is the shortest, fizzBuzz0 and fizzBuzz 2 trade off on being the second shortest, and fizzBuzz3 being the longest.

// Clearest conclusions:
// The somewhat unexpected result that testing two conditions if((i%3 === 0) && (i%5 === 0)) appears to be less time-consuming than testing one condition if(i%15 === 0).  Begs the question whether testing for divisibility by larger numbers will consistently take more time than testing for smaller numbers.
// The most time-consuming function had a few different possible explanations for how time-consuming it was
// 	1 - it did not have the earlier bail-out of if()else if() because it relied up repeated if statements to build FizzBuzz from the Fizz and the Buzz, so it may have been more time-consuming because it tested each condition.
// 	2 - FizzBuzz was created from adding Fizz and Buzz in cases where both were true.  Does the additive feature of the string consume more time than just setting a string?
// 	3 - output.length<1 is used as a means of checking if output had been set to fizz, buzz, or fizzbuzz.  Does measurement of length of a string cost substantially more time? 