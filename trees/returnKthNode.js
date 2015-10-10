// findKthNode returns the kth node from the node passed to the function.  If bad data is passed or if the number of values in the node is less than k, the return value is false
// space complexity: O(1) -- for the counter on the number of values from the first to the kth and the size of ther returned node (and its sub-nodes)
//    	return value is the node (and its constituent nodes)
// time complexity: not quite sure how to state this -- worst case is the total number of values in the initial node tree; best case is k plus however many nodes needed to be navigated to get to those values (logn + k?)

var aNode = {
	value: 8,
	left: {
		value: 	6,
		left: 	{
			value: 	4,
			left: 	undefined,
			right: 	undefined
		},
		right: 	{
			value: 	7,
			left: 	undefined,
			right: 	{
				value: 	7.5,
				left: 	undefined,
				right: 	undefined
			}
		}
	}, 
	right: {
		value:10,
		left:{
			value: 	9, 
			left:  	undefined,
			right: {
				value: 	9.5,
				left: 	undefined,
				right: 	undefined
			}
		},
		right: 	undefined
	}
}

function readInOrder(root){
	if(root===undefined){
		return false
	}
	var arr=[];
	function read(root){
		if(root.left!==undefined){
			read(root.left);
		}
		arr.push(root.value);
		if(root.right!==undefined){
			read(root.right);
		}
	}
	read(root);
	return arr;
}

//return node with value K from BST
function findKthNode(root, k){
	function returnKthNode(root,k){	
		if(root.left!==undefined){
			returnKthNode(root.left, k);
		}
		counter++;
		if(counter===k){
			output = root;
			return;
		}
		if(root.right!==undefined){
			returnKthNode(root.right, k);
		}
	}
	if(root===undefined || typeof root !='object' || k===undefined || typeof k != 'number' || k <1){
		console.log('root undefined?', root===undefined, ', root:', typeof root, ', k:', typeof k);
		return false;
	}
	var counter = 0;
	var output;
	returnKthNode(root,k);
	if(k>counter){
		return false;
	}
	return output;
}

console.log('tree read in order: ', readInOrder(aNode));

for (var i = 1; i<9;i++){
	console.log('\nINTENDED SUCCESS');
	console.log('node', i, 'is:',findKthNode(aNode,i));
}

console.log('INTENDED FAILURE -- k greater than number of values in the tree');
console.log('9th node is:',findKthNode(aNode, 9),'\n');

var node;
console.log('INTENDED FAILURE -- bad data -- undefined tree')
console.log('undefined tree is:',findKthNode(node,1),'\n');

console.log('INTENDED FAILURE -- bad data -- k not numeric')
console.log('ath node is:', findKthNode(aNode, 'a'),'\n');

console.log('INTENDED FAILURE -- bad data -- k<1');
console.log(' 0th node is:',findKthNode(aNode,0));



// var aNode = {
// 	value: 8,
// 	left: {
// 		value: 	6,
// 		left: 	{
// 			value: 	4,
// 			left: 	undefined,
// 			right: 	undefined
// 		},
// 		right: 	undefined
// 	}, 
// 	right: {
// 		value:10,
// 		left:{
// 			value: 	9, 
// 			left:  	undefined,
// 			right: {
// 				value: 	9.5,
// 				left: 	undefined,
// 				right: 	undefined
// 			}
// 		},
// 		right: 	undefined
// 	}
// }

//return kth node rom BST
// function findKthNode(root, k){
// 	var returnKthNode=function(root,k){	
// 		if(root.left!==undefined){
// 			returnKthNode(root.left, k);
// 		}
// 		arr.push(root.value);
// 		if(arr.length===k){
// 			console.log(arr, root);
// 			return root;
// 		}
// 		if(root.right!==undefined){
// 			returnKthNode(root.right, k);
// 		}
// 	}
// 	console.log(typeof root, typeof k);
// 	if(root===undefined || typeof root !='object' || k===undefined || typeof k != 'number' || k <1){
// 		return false;
// 	}
// 	var arr=[];
// 	var output = returnKthNode(root,k);
// 	console.log('output',output);
// 	if(k>arr.length){
// 		return false;
// 	}
// 	return output;
// }

// console.log(findKthNode(aNode,1));

// console.log('INTENDED SUCCESS');
// console.log(findKthNode(aNode,4));

// console.log(findKthNode(aNode, 7))

// console.log('INTENDED FAILURE -- bad data - no node');
// var node;
// console.log(findKthNode(node,1));

// console.log('INTENDED FAILURE -- bad data - k not numeric');
// console.log(findKthNode(aNode, 'a'));

// console.log('INTENDED FAILURE -- bad data - k<1');
// console.log(findKthNode(aNode,0));

// console.log('INTENDED FAILURE -- bad data - k greater than the number of values in the node');
// console.log(findKthNode(aNode,9));


// findKthNode returns the kth node from the node passed to the function.  If bad data is passed or if the number of values in the node is less than k, the return value is false
// space complexity: O(1) -- for the counter on the number of values from the first to the kth
//    	return value is the node (and its constituent nodes)
// time complexity: not quite sure how to state this -- worst case is the total number of values in the initial node tree; best case is k plus however many nodes needed to be navigated to get to those values (logn + k?)


// var aNode = {
// 	value: 8,
// 	left: {
// 		value: 	6,
// 		left: 	{
// 			value: 	4,
// 			left: 	undefined,
// 			right: 	undefined
// 		},
// 		right: 	undefined
// 	}, 
// 	right: {
// 		value:10,
// 		left:{
// 			value: 	9, 
// 			left:  	undefined,
// 			right: {
// 				value: 	9.5,
// 				left: 	undefined,
// 				right: 	undefined
// 			}
// 		},
// 		right: 	undefined
// 	}
// }

//return kth node rom BST
// function findKthNode(root, k){
// 	function returnKthNode(root,k){	
// 		if(root.left!==undefined){
// 			returnKthNode(root.left, k);
// 		}
// 		counter++;
// 		console.log(root.value, counter);
// 		if(counter===k){
// 			console.log('hit');
// 			return root;
// 		}
// 		if(root.right!==undefined){
// 			returnKthNode(root.right, k);
// 		}
// 	}
// 	console.log(typeof root, typeof k);
// 	if(root===undefined || typeof root !='object' || k===undefined || typeof k != 'number' || k <1){
// 		return false;
// 	}
// 	var counter=0;
// 	var output = returnKthNode(root,k);
// 	if(k>counter){
// 		return false;
// 	}
// 	return output;
// }

// console.log('INTENDED SUCCESS -- first (left-most) item in the tree');
// console.log(findKthNode(aNode,1));

// console.log('INTENDED SUCCESS -- somewhere in the middle of the tree');
// console.log(findKthNode(aNode,4));

// console.log('INTENDED SUCCESS -- last value in the tree');
// console.log(findKthNode(aNode,7));

// console.log('INTENDED FAILURE -- bad data - no tree');
// var node;
// console.log(findKthNode(node,1));

// console.log('INTENDED FAILURE -- bad data - k not numeric');
// console.log(findKthNode(aNode, 'a'));

// console.log('INTENDED FAILURE -- bad data - k<1');
// console.log(findKthNode(aNode,0));

// console.log('INTENDED FAILURE -- bad data - k greater than the number of values in the tree');
// console.log(findKthNode(aNode,9));


//return kth node from end of BST
// function findKthFromLastNode(root, k){
// 	function returnKthFromLastNode(root,k){	
// 		if(root.right!==undefined){
// 			returnKthFromLastNode(root.right, k);
// 		}
// 		counter++;
// 		console.log(root.value, counter);
// 		if(counter===k){
// 			console.log('hit');
// 			return root;
// 		}
// 		if(root.left!==undefined){
// 			returnKthFromLastNode(root.left, k);
// 		}
// 	}
// 	console.log(typeof root, typeof k);
// 	if(root===undefined || typeof root !='object' || k===undefined || typeof k != 'number' || k <1){
// 		return false;
// 	}
// 	var counter=0;
// 	var output = returnKthFromLastNode(root,k);
// 	if(k>counter){
// 		return false;
// 	}
// 	return output;
// }

// console.log('\n find kth from last node (findKthFromLastNode)')

// console.log('INTENDED SUCCESS -- last value or rightmost value (defined as 1st)');
// console.log(findKthFromLastNode(aNode,1));

// console.log('INTENDED SUCCESS -- middle of tree');
// console.log(findKthFromLastNode(aNode,4));

// console.log('INTENDED SUCCESS -- left-most item in the tree');
// console.log(findKthFromLastNode(aNode,7));

// console.log('INTENDED FAILURE -- bad data - no tree');
// var node;
// console.log(findKthFromLastNode(node,1));

// console.log('INTENDED FAILURE -- bad data - k not numeric');
// console.log(findKthFromLastNode(aNode, 'a'));

// console.log('INTENDED FAILURE -- bad data - k<1');
// console.log(findKthFromLastNode(aNode,0));

// console.log('INTENDED FAILURE -- bad data - k greater than the number of values in the tree');
// console.log(findKthFromLastNode(aNode,9));