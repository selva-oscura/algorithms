// for a given string, print all permutations of its constituent letters


var permutateString = function(str){
	var output =[];
	var prefix = "";
	var permString  = function(str, prefix){
		if(str===""){
			output.push(prefix);
			return;
		}
		for(var i = 0; i<str.length; i++){
			if(!prefix){
				var prefix = "";
			}
			var remnant = str.slice(0,i)+str.slice(i+1, str.length);
			permString(remnant, prefix+str[i]);
		}
		return output;
	}
	return permString(str, prefix);
}

var string = "abc";
var string2 = "abcd";
var string3 = "abcde";
console.log(permutateString(string));
console.log(permutateString(string2));
console.log(permutateString(string3));