// Pig Latin
// Write a method the takes in a string and returns the pig latin equivalent. Pig Latin takes the first consonant, moves it to the end of the word and places “ay” at the end. If the string starts with a consonant do nothing. “pig” = “igpay”, “banana” = “ananabay”

var pigLatinise = function(string){
	var output = [];
	var input = string.split(" ");
	var vowelCheck = function(letter){
		if(letter.toLowerCase() === "a" || 
			letter.toLowerCase() === "e" || 
			letter.toLowerCase() === "i" || 
			letter.toLowerCase() === "o" || 
			letter.toLowerCase() === "u"){
			return true;
		}
		return false;
	}
	for(i in input){
		if(vowelCheck(input[i][0])){
			output.push(input[i]);
		}else{
			var newWord = input[i].slice(1,input[i].length)+input[i][0]+"ay";
			console.log(newWord);
			output.push(newWord);
		}
	}
	return output.join(" ");
}

console.log(pigLatinise("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"))