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
		arr.push(root.value);
		if(arr.length===k){
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
	var arr=[];
	var output = returnKthNode(root,k);
	if(k>arr.length){
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