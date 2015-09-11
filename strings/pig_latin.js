// Pig Latin
// Write a method the takes in a string and returns the pig latin equivalent. Pig Latin takes the first consonant, moves it to the end of the word and places “ay” at the end. If the string starts with a consonant do nothing. “pig” = “igpay”, “banana” = “ananabay”

// simplePigLatinise shifts the first letter of the word to the end and adds 'ay' to the end of that word if the word is a consonant.  It does not alter words beginning with vowels.
// Note: simplePigLatinise does not address some of the more complex ways in which Pig Latin is actually done, including the shifting of digraphs or trigraphs (e.g. th, sch) and not just single letters, shifting of capitalisation to the new start letter, and punctuation being treated as not part of the word albeit with mid-word punctuation (namely, apostrophes for abbreviations) remaining in place as part of the word.
var simplePigLatinise = function(string){
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
			output.push(newWord);
		}
	}
	return output.join(" ");
}


// pigLatiniseWithDigraphsAndTrigraphs -- To address digraphs and trigraphs, this algorithm shifts all consonants before the first vowel. Some vowels, however, are problematic, since they can also act as consonants (qu in all cases at the beginning of a sentence with u acting as a w sound; u acting as a w in guava, though not gut; and i acting sometimes to produce ch or sh sounds for combinations including ci, si, and ti in mid-sentence uses, such as racial, precision, or question).  Qu is a clear case, so it is being treated as a digraph or trigraph (e.g. squ in squeak) and will be shifted.  Gu is ambiguous and can not be dealt with absent a means of determining its sound (e.g. use of a dictionary with representations of the sound of the word), so it will not be addressed in this algorithm. Ti/ci/si and mid-word digraphs/trigraphs are not relevant since pig latin only manipulates the beginning of a word. 
// One wrinkle remains: y can act as a vowel (e.g. rhythm or my). A y as the initial consonant acts as a consonant, but y after a consonant acts as a vowel, so it will be treated as a vowel where it appears after another consonant.
var pigLatiniseWithDigraphsAndTrigraphs = function(string){
	var output = [];
	var input = string.split(" ");
	var vowelCheck = function(word, j){
		if(word[j].toLowerCase() === "a" || 
			word[j].toLowerCase() === "e" || 
			word[j].toLowerCase() === "i" || 
			word[j].toLowerCase() === "o" || 
			word[j].toLowerCase() === "u"){
			if(j>0 && word[j].toLowerCase() === "u" && word[j-1].toLowerCase()==="q"){
				return false;
			}
			return true;
		}
		if(j>0 && word[j].toLowerCase() === "y"){
			return true;
		}
		return false;
	}
	for(var i in input){
		var positionInWord = 0;
		while(!vowelCheck(input[i], positionInWord)){
			positionInWord++;
		}
		if(positionInWord===0){
			output.push(input[i]);
		}else{
			var newWord = input[i].slice(positionInWord,input[i].length)+input[i].slice(0,positionInWord)+"ay";
			output.push(newWord);				
		}
	}
	return output.join(" ");

}


var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
var digraphAndTrigraphText = "The words are clown flame quick rhythm string scarecrow child skyscraper chimney present grapes trombone fruit stratospheric."

console.log('simplePigLatinise')
console.log(text, "\n\r", simplePigLatinise(text));
console.log('pigLatiniseWithDigraphsAndTrigraphs with Lorem Ipsum');
console.log(text, "\n\r",pigLatiniseWithDigraphsAndTrigraphs(text));
console.log('pigLatiniseWithDigraphsAndTrigraphs with digraph and trigraph text');
console.log(digraphAndTrigraphText, "\n\r",pigLatiniseWithDigraphsAndTrigraphs(digraphAndTrigraphText));