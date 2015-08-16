//create a Node
var Node = function Node(val){
	this.value = val;
	this.right = null;
	this.left = null;
}

//create a Binary Search Tree (BST)
var BST = function BST (){
	this.root = null;
}

//add nodes to the BST
BST.prototype = {
	add: function(val){
		var node = new Node(val);
		if(this.root == null){
			this.root = node;
		}else{
			var current = this.root;
			while(current != null){
				if(current.value<node.value){
					if(current.right == null){
						current.right = node;
						return this;
					}else{
						current = current.right;
					}
				}else{
					if(current.left == null){
						current.left = node;
						return this;
					}else{
						current = current.left;
					}
				}
			}
		}
	},
	//read BST in order
	readInOrder: function(root){
		if(root==undefined){
			var root = this.root;
		}
		if(root.left!=null){
			this.readInOrder(root.left);
		}
		console.log(root.value);
		if(root.right!=null){
			this.readInOrder(root.right);
		}
	},
	//read BST in PreOrder
	readPreOrder:function(root){
		if(root==undefined){
			var root = this.root;
		}
		console.log(root.value);
		if(root.left!=null){
			this.readPreOrder(root.left);
		}
		if(root.right!=null){
			this.readPreOrder(root.right);
		}

	},
	//return node with value K from BST
	returnNodeK: function(k){
		var current = this.root;
		while(current!=null){
			if(current.value === k){
				// console.log(current)
				return current;
			}else if(current.left!=null & current.value>k){
				current = current.left;
			}else{
				current = current.right;
			}
		}
		var output=k + " not found";
		// console.log(output);
		return output;
	}
}




// creating  a bst with values 3,6,1,7,23,18
console.log("creating a bst with values 3,6,1,7,23,18");
var arr = [3,6,1,7,23,18];
var myBst = new BST;
for(var i=0; i<arr.length; i++){
	myBst.add(arr[i]);
}

// reading bst in order (left, current, right), producing the values in sorted order
console.log('\nreading bst inOrder (left, current, right), producing the values in sorted order');
myBst.readInOrder();
console.log('\nreading bst preOrder (current, left, right)');
myBst.readPreOrder();

//returning node with value 3 from the bst
console.log('\nreturning node with value 3 from the bst')
console.log(myBst.returnNodeK(3));

//returning node with value 4 from the bst
console.log('\nreturning node with value 4 from the bst')
console.log(myBst.returnNodeK(4));
