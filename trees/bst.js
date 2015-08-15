var Node = function Node(val){
	this.value = val;
	this.right = null;
	this.left = null;
}

var BST = function BST (){
	this.root = null;
}

BST.prototype.add = function(val){
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
}

BST.prototype.read = function(root){
	if(root==undefined){
		var root = this.root;
	}
	if(root.left!=null){
		this.read(root.left);
	}
	console.log(root.value);
	if(root.right!=null){
		this.read(root.right);
	}
}

var arr = [3,6,1,7,23,18];
var myBst = new BST;
for(var i=0; i<arr.length; i++){
	myBst.add(arr[i]);
}
myBst.read();

