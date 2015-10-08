// binary tree which is a binary search tree
var root1 = {
	value: 8,
	left: {
		value: 6,
		left:undefined,
		right: undefined
	}, 
	right: {
		value:10,
		left:{
			value:9, 
			left: undefined,
			right: {
				value:9.5,
				left:undefined,
				right: undefined
			}
		},
		right:undefined
	}
}

// binary tree which is not a binary search tree
var root2 = {
	value: 8,
	left: {
		value: 6,
		left:undefined,
		right: {
			value: 11,
			left:undefined,
			right:undefined
		}
	}, 
	right: {
		value:10,
		left:{
			value:9, 
			left: undefined,
			right: {
				value:11,
				left:undefined,
				right: undefined
			}
		},
		right:undefined
	}
}

// binary tree which is not a binary search tree
var root3 = {
	value: 8,
	left: {
		value: 6,
		left:undefined,
		right: {
			value: 9,
			left:undefined,
			right:undefined
		}
	}, 
	right: {
		value:10,
		left:{
			value:8.5, 
			left: undefined,
			right: {
				value:11,
				left:undefined,
				right: undefined
			}
		},
		right:undefined
	}
}



function readInOrder(root){
	if(root===undefined){
		return false;
	}
	if(root.left!==undefined){
		readInOrder(root.left);
	}
	console.log(root.value);
	if(root.right!==undefined){
		readInOrder(root.right);
	}
}

function isBST(root){
	function minValue(root){
		var current = root;
		while(current.left !== undefined){
			current = current.left
		}
		return current.value;
	}
	function maxValue(root){
		var current = root;
		while(current.right !== undefined){
			current = current.right;
		}
		return current.value;
	}
	if(root === undefined){
		return true
	}
	if((root.left !== undefined) && (maxValue(root.left)> root.value)){
		return false;
	}
	if((root.right !==undefined) && (minValue(root.right)<=root.value)){
		return false
	}
	// console.log(isBST(root.left), isBST(root.right))
	return (isBST(root.left) && isBST(root.right));
}


console.log('\ntesting if binary tree is a binary search tree');
console.log('\nintended pass\nreadInOrder:');
readInOrder(root1);
console.log('isBST?', isBST(root1));

console.log('\nintended fail\nreadInOrder:');
readInOrder(root2);
console.log('isBST?', isBST(root2));

console.log('\nintended fail\nreadInOrder:');
readInOrder(root3);
console.log('isBST?', isBST(root3));