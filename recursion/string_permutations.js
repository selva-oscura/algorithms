// for a given string, print all permutations of its constituent letters

// Time complexity:
//		for generation of permutations: n factorial
//		for checking of permutations: proportional to number of permutations (hash used to check, so avoid checking each permutation against all of the already-generated permutations, as would be necessary if checking against an array)
// Space complexity:
//		twice a maximum of n factorial (n!), where n is the length of the string, if no duplicates (once for the output array and once for the hash table)
//		if there are duplicate characters, then the space complexity is reduced divide n! (where n = length of string) by the k! of each character with k duplications  (e.g. a string of 20 with 1 character repeated twice and a second character repeated 3 times would be 20!/(2!*3!))
// Could reduce space complexity by avoiding an output array and just using the dupCheck object, for which the keys would then be outputted

var permutateString = function(str){
	var count = 0;
	var output =[];
	var prefix = "";
	var dupCheck = {};
	var permString  = function(str, prefix){
		if(str===""){
			if(dupCheck[prefix]===undefined){
				dupCheck[prefix] = 1;
				output.push(prefix);
				count++;
			}
			return;
		}
		for(var i = 0; i<str.length; i++){
			if(!prefix){
				var prefix = "";
			}
			var remnant = str.slice(0,i)+str.slice(i+1, str.length);
			permString(remnant, prefix+str[i]);
		}
		return {permutations: output, count: count};
	}
	return permString(str, prefix);
}

var string = "abc";
var string2 = "abcd";
var string_dup = "abb";
var string_dup2 = "bbb";
var string_dup3 = "abcb";
var string_dup4 = "aaaa";
console.log(permutateString(string));
console.log(permutateString(string2));
console.log(permutateString(string_dup));
console.log(permutateString(string_dup2));
console.log(permutateString(string_dup3));
console.log(permutateString(string_dup4));
