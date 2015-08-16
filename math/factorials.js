// Problem: For n!, how many zeroes will there be at the end of the number?
// Caveat: Can not simply calculate n! because it will quickly overflow the number of digits in memory (plus it is not necessary to do that computation heavy work)
// Insight: the number of zeroes (actually tens, a product of 2 and 5), will be dependent upon the number of 2s and 5s in n!
// Example:
// 	6! = 6 * 5 * 4 * 3 * 2 * 1
// 		 6 = 2 * 3   		(giving us one 2)
// 		 5  				(giving us one 5)
// 		 4 = 2 * 2          (giving us 2 more 2s for a total of three 2s)
// 		 3
// 		 2 = 2  			(giving us 1 more 2 for a total of 4 twos)
// 	with four 2s and one 5, we will end up with one 10 (one trailing zero)
// Insight 2: Since 2s will be far more common than 5s, we do not actually need to calculate the number of 2s since it is the number of 5s that will be the limiting factor.
// Insight 3: exponents matter! A naive solution might suggest we just see how many numbers <=n are divisible by five.	
// 		(Too calculate this we could just calculate Math.floor(n/5))
// 	and take that as the answer
// 	BUT that would ignore that 25 (and 50, 75, 600, and other multiples of 25 that are not multiples of 5 to a higher power than 2) would have two fives, not just 1 five.  Likewise, multiples of 125 (5^3), 625 (5^4), etc. and their multiples would have a number of fives reflecting the power of 5.
// 	so to calculate the number of fives we need to not just calculate the multiples of 5 (Math.floor(n/5)), but then the multiples of 25 and the multiples of 125 and.....

// iterative solution
// 	this could be done iteratively by running for 5, then 25, then... stopping at the point when the next exponent of 5 would exceed n (this would return zero....so might as well bail out rather than continuing to divide until the end of time as exponents mount)  ;-)

var trailingZeroesIterative = function(n){
	var power = 1;
	var numFives = 0;
	// flip sign on negative numbers in order to ensure < and > won't be complicated by postitive/negative numbers (which are outside the area of concern for this puzzle)
	if(n<0){
		n = -n;
	}
	while (n>=Math.pow(5,power)){
		numFives += Math.floor(n/Math.pow(5,power));
		power++;
	}
	return numFives;
}
console.log(0,trailingZeroesIterative(0));
console.log(4,trailingZeroesIterative(4));
console.log(5,trailingZeroesIterative(5));
console.log(6,trailingZeroesIterative(6));
console.log(9,trailingZeroesIterative(9));
console.log(10,trailingZeroesIterative(10));
console.log(11,trailingZeroesIterative(11));
console.log(23,trailingZeroesIterative(23));
console.log(25,trailingZeroesIterative(25));
console.log(32,trailingZeroesIterative(32));
console.log(-32,trailingZeroesIterative(-32));
console.log(124,trailingZeroesIterative(124));
console.log(125,trailingZeroesIterative(125));
console.log(126,trailingZeroesIterative(126));
console.log(624,trailingZeroesIterative(624));
console.log(625,trailingZeroesIterative(625));
console.log(626,trailingZeroesIterative(626));



// recursive solution
// the recursive solution we would just take the value we get from Math.floor(n/5) and run that through the equation as the new 'n' to check (and its output and its output and its output) until that point when Math.floor(lastStepsValue/5) < 5

var trailingZeroesRecursive = function(n){
	// flip sign on negative numbers in order to ensure < and > won't be complicated by postitive/negative numbers (which are outside the area of concern for this puzzle)
	if(n<0){
		n = -n;
	}
	if(n<5){
		return 0;
	}
	numFives = Math.floor(n/5);
	if(numFives>=5){
		return numFives + trailingZeroesRecursive(numFives);
	}
	return numFives;
}
console.log(0,trailingZeroesRecursive(0));
console.log(4,trailingZeroesRecursive(4));
console.log(5,trailingZeroesRecursive(5));
console.log(6,trailingZeroesRecursive(6));
console.log(9,trailingZeroesRecursive(9));
console.log(10,trailingZeroesRecursive(10));
console.log(11,trailingZeroesRecursive(11));
console.log(23,trailingZeroesRecursive(23));
console.log(25,trailingZeroesRecursive(25));
console.log(32,trailingZeroesRecursive(32));
console.log(-32,trailingZeroesRecursive(-32));
console.log(124,trailingZeroesRecursive(124));
console.log(125,trailingZeroesRecursive(125));
console.log(126,trailingZeroesRecursive(126));
console.log(624,trailingZeroesRecursive(624));
console.log(625,trailingZeroesRecursive(625));
console.log(626,trailingZeroesRecursive(626));
