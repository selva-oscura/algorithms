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


// Given: an unsorted array, sort its constituent elements into order, starting at index 0, creating a sorted section and then one-by-one shifting the first element in the unsorted part of the array into its correct position within the array.

function insertionSortFull(arr){
	console.log(arr);
	for(var i = 1; i<arr.length; i++){
		var temp = arr[i];
		console.log(temp);
		var pointer = i;
		while(arr[pointer-1]>temp && pointer>0){
			arr[pointer] = arr[pointer-1];
			pointer--;
			// console.log(arr);
		}
		arr[pointer] = temp;
		console.log(arr);
	}
	console.log(arr);
	return arr;
}

console.log('output:',insertionSortFull([1, 4, 3, 5, 6, 2]));
console.log('output:',insertionSortFull([1, 10, 4, 3, 5, 6, 2, -8, 2]));

