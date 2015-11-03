// Given: a sorted array that has had a new element pushed to it without concern for sort-order, move the new element into place and return the sorted array

function insertionSortEasy(arr){
	// console.log(arr);
	var temp = arr[arr.length - 1];
	var pointer = arr.length - 1;
	while(arr[pointer-1]>temp && pointer>0){
		arr[pointer] = arr[pointer-1];
		pointer--;
		// console.log(arr);
	}
	arr[pointer] = temp;
	// console.log(arr);
	return arr;
}

console.log('output:',insertionSortEasy([2, 4, 6, 8, 3]));

