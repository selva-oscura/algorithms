// findKthNode returns the kth node from the node passed to the function.  If bad data is passed or if the number of values in the node is less than k, the return value is false
// space complexity: O(1) -- for the counter on the number of values from the first to the kth
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
		right: 	undefined
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

//return node with value K from BST
function findKthNode(root, k){
	function returnKthNode(root,k){	
		if(root.left!==undefined){
			returnKthNode(root.left, k);
		}
		counter++;
		if(counter===k){
			return root;
		}
		if(root.right!==undefined){
			returnKthNode(root.right, k);
		}
	}
	console.log(typeof root, typeof k);
	if(root===undefined || typeof root !='object' || k===undefined || typeof k != 'number' || k <1){
		return false;
	}
	var counter=0;
	var output = returnKthNode(root,k);
	if(k>counter){
		return false;
	}
	return output;
}

console.log('INTENDED SUCCESS');
console.log(findKthNode(aNode,3));

console.log('INTENDED FAILURE -- bad data - no node');
var node;
console.log(findKthNode(node,1));

console.log('INTENDED FAILURE -- bad data - k not numeric');
console.log(findKthNode(aNode, 'a'));

console.log('INTENDED FAILURE -- bad data - k<1');
console.log(findKthNode(aNode,0));

console.log('INTENDED FAILURE -- bad data - k greater than the number of values in the node');
console.log(findKthNode(aNode,9));