// isBalancedBreadthFirst 
	// space complexity is initially approximately linear to size of tree, though diminishing as ititerates (due to ignoring parent nodes as it proceeds down the generations)
	// time complexity is linear to number of nodes for a balanced tree since it will be checking each node, but  somewhat shorter with unbalanced tree, due to early bailout once it finds that there were missing children in the previous generation and children in the next generation (in other words, if previous generation had missing children and the current generation nodes have children => difference in depth > 1)

var balancedDense = {
	value: 8,
	left: {
		value: 6,
		left: {
			value: 	4,
			left: 	undefined,
			right: 	undefined
		},
		right: {
			value: 	7,
			left: 	undefined,
			right: 	undefined
		}
	}, 
	right: {
		value:10,
		left:{
			value: 	9, 
			left:  	undefined,
			right: 	undefined
		},
		right: {
			value: 	11,
			left: 	undefined,
			right: 	undefined
		}
	}
}

var balancedOpen = {
	value: 8,
	left: {
		value: 	6,
		left: 	undefined,
		right: 	undefined
	}, 
	right: {
		value:10,
		left:{
			value: 	9, 
			left:  	undefined,
			right: 	undefined
		},
		right: {
			value: 	9.5,
			left: 	undefined,
			right: 	undefined
		}
	}
}

var unbalanced1 = {
	value: 8,
	left: {
		value: 	6,
		left: 	undefined,
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

var unbalanced2 = {
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
function isBalancedBreadthFirst(roots, lastGenHadChildlessNodes){
	if(roots === undefined){
		return false;
	}
	var nextRoots = [];
	if(lastGenHadChildlessNodes === undefined){
		var lastGenHadChildlessNodes = false;
		var roots = [roots];
	}
	var thisGenHasChildlessNodes = false;
	if(lastGenHadChildlessNodes){
		console.log('last Generation had childless Nodes. If this generation has children, tree is unbalanced and should fail.');
	}
	for(root in roots){
		console.log('current', roots[root].value);
		if(roots[root].left!==undefined){
			console.log('left', roots[root].left.value);
			nextRoots.push(roots[root].left);
		}else{
			console.log('left -- NONE');
			var thisGenHasChildlessNodes = true;
		}
		if(roots[root].right!==undefined){
			console.log('right', roots[root].right.value);
			nextRoots.push(roots[root].right);
		}else{
			console.log('right -- NONE');
			var thisGenHasChildlessNodes = true;
		}
	}
	console.log('last Generation include childless nodes?', lastGenHadChildlessNodes, '\nthis Generation include childless Nodes?', thisGenHasChildlessNodes, '\nnumber of children in next Generation', nextRoots.length);
	if(lastGenHadChildlessNodes === false && nextRoots.length>0){
		return isBalancedBreadthFirst(nextRoots, thisGenHasChildlessNodes);
	}
	if(lastGenHadChildlessNodes === true && nextRoots.length>0){
		return false;
	}
	return true;
}

console.log('\nbreadth-first test if binary tree is balanced (function isBalancedBreadthFirst)');
console.log('\nINTENDED PASS');
console.log('\nisBalanced?', isBalancedBreadthFirst(balancedDense));

console.log('\nINTENDED PASS');
console.log('\nisBalanced?', isBalancedBreadthFirst(balancedOpen));

console.log('\nINTENDED FAIL');
console.log('\nisBalanced?', isBalancedBreadthFirst(unbalanced1));

console.log('\nINTENDED FAIL');
console.log('\nisBalanced?', isBalancedBreadthFirst(unbalanced2));
