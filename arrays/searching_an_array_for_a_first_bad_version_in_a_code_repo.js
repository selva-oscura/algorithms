// You are a product manager, currently leading a team to develop a new product.  Unfortunately, the latest version of the product fails the quality check. Since each version is developed based in the previous version, all the versions after a bad version are also bad.  Suppose you have n versions [1, 2...n] and you want to find the first bad one which is causing all other ones to be bad.  You are given an API bool isBadVersion(version), which will return whether the version is bad. Implement a funciton to find the first bad version.  You should minimize the number of calls to the API.

// Approach: To minimise the number of calls to the API, instead of going through all versions to look for the bad version, this function (badCheck) verifies whether there is a bad version and then starts the firstBad function looking at the mid-point of the array to see if that point is bad.  If that point is bad, the array from its beginning to the bad point is fed back to firstBad.  If that point is not bad, the array from the next point to the end of the array is fed back to firstBad.  Reducing array length by approximately one-half each time, this recursive function has a time complexity of O of log n. (By comparison, sweeping through the entire array would have a time complexity of O of n.)

var badCheck = function(arr){
	// finds the first bad function
	var firstBad = function(arr){
		if(arr.length<=2){
			if(arr[0].isBad===true){
				return arr[0].version;
			}else if(arr[1]){
				return arr[1].version;
			}
			return "error"
		}
		var target = Math.floor(arr.length/2);
		if(arr[target].isBad === true){
			return firstBad(arr.slice(0,target+1));
		}else{
			return firstBad(arr.slice(target+1, arr.length));
		}
	}
	// verifies whether there is, indeed, any bad version and starts the main checking algorithm (firstBad) if it finds that there is a bad version.
	if(arr[arr.length-1].isBad===true){
		return firstBad(arr);
	}else{
		return "no bad versions";
	}
}

// generates the array to be tested
var generateArray = function(){
	var length = Math.random()*100;
	var arr = [];
	// var pos = 9;
	var pos = Math.floor(Math.random()*length);
	console.log('from generateArray: isBad will start at', pos);
	var cand = function(num){
		if(num>=pos){
			var bad = true;
		}else{
			var bad = false;
		}
		vers = {
			version: 	num,
			isBad: 		bad
		}
		return vers;
	}
	for(var i = 1; i<=length; i++){
		arr.push(cand(i));
	}
	console.log(arr);
	return arr;
}

var arr = generateArray()
console.log(badCheck(arr));