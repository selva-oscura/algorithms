// for a given string, print all permutations of its constituent letters


var permutateString = function(str){
	var count = 0;
	var output =[];
	var prefix = "";
	var permString  = function(str, prefix){
		if(str===""){
			output.push(prefix);
			count++;
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
var string3 = "aaaa";
console.log(permutateString(string));
console.log(permutateString(string2));
console.log(permutateString(string3))
